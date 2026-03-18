import React, { useState, useCallback, useEffect } from "react";
import { Download, GraduationCap, Plus, AlertCircle } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Alert, AlertDescription } from "./components/ui/alert";
import { CategorySection } from "./components/CategorySection";
import { CATEGORIES } from "./types/hours";
import ApiService from "./services/api";
import "./App.css";

export default function App() {
  const [files, setFiles] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState(CATEGORIES);

  const loadProjectFiles = useCallback(async (projectId) => {
    try {
      const response = await ApiService.getProjectFiles(projectId);
      if (response.success) {
        setFiles(
          response.data.map((file) => ({
            id: file.id.toString(),
            file: null, // Arquivo já está no servidor
            subcategoryId: file.subcategory_id,
            categoryId: file.category_id,
            inputHours: file.input_hours,
            calculatedHours: file.calculated_hours,
            name: file.file_name,
            serverPath: file.file_path,
          })),
        );
      }
    } catch (err) {
      setError("Erro ao carregar arquivos: " + err.message);
    }
  }, []);

  const initializeProject = useCallback(async () => {
    try {
      setLoading(true);
      const projectName = `Projeto ${new Date().toLocaleDateString(
        "pt-BR",
      )} ${new Date().toLocaleTimeString("pt-BR")}`;
      const response = await ApiService.createProject(
        projectName,
        "Projeto de horas complementares",
      );
      setCurrentProject(response.data);
      await loadProjectFiles(response.data.project_id);
    } catch (err) {
      setError("Erro ao inicializar projeto: " + err.message);
    } finally {
      setLoading(false);
    }
  }, [loadProjectFiles]);

  const loadCategories = useCallback(async () => {
    try {
      const response = await ApiService.getCategories();
      if (response.success) {
        setCategories(response.data);
      }
    } catch (err) {
      console.warn(
        "Usando categorias locais devido a erro na API:",
        err.message,
      );
    }
  }, []);

  // Inicializa projeto ao carregar a aplicação
  useEffect(() => {
    initializeProject();
    loadCategories();
  }, [initializeProject, loadCategories]);

  const handleFileDrop = useCallback(
    async (droppedFiles, subcategoryId, categoryId) => {
      if (!currentProject) {
        setError("Nenhum projeto ativo");
        return;
      }

      setLoading(true);
      setError(null);

      try {
        for (const file of droppedFiles) {
          const response = await ApiService.uploadFile(
            currentProject.project_id,
            file,
            categoryId,
            subcategoryId,
            0,
          );

          if (response.success) {
            const newFile = {
              id: response.data.file_id.toString(),
              file: null,
              subcategoryId,
              categoryId,
              inputHours: response.data.input_hours,
              calculatedHours: response.data.calculated_hours,
              name: response.data.filename,
              serverPath: null,
            };

            setFiles((prev) => [...prev, newFile]);
          }
        }
      } catch (err) {
        setError("Erro ao fazer upload: " + err.message);
      } finally {
        setLoading(false);
      }
    },
    [currentProject],
  );

  const handleHoursChange = useCallback(
    async (fileId, hours) => {
      if (!currentProject) return;

      const normalizedHours = Number(hours) || 0;
      const targetFile = files.find((file) => file.id === fileId);

      if (!targetFile) {
        setError("Arquivo não encontrado para atualizar horas.");
        return;
      }

      try {
        const response = await ApiService.updateFileHours(
          parseInt(fileId),
          normalizedHours,
        );

        if (response.success) {
          let calculatedHours = normalizedHours;

          // Prioriza o cálculo da API para manter consistência com o backend.
          try {
            const calculationResponse = await ApiService.calculateHours(
              normalizedHours,
              targetFile.subcategoryId,
            );
            if (calculationResponse.success) {
              calculatedHours = calculationResponse.data.calculated_hours;
            }
          } catch {
            // Fallback local caso a rota de cálculo esteja indisponível.
            const category = categories.find(
              (cat) => cat.id === targetFile.categoryId,
            );
            const subcategory = category?.subcategories.find(
              (sub) => sub.id === targetFile.subcategoryId,
            );
            if (!subcategory) {
              setError("Subcategoria não encontrada para este arquivo.");
            }
          }

          setFiles((prev) =>
            prev.map((file) => {
              if (file.id !== fileId) return file;

              return {
                ...file,
                inputHours: normalizedHours,
                calculatedHours,
              };
            }),
          );
        }
      } catch (err) {
        setError("Erro ao atualizar horas: " + err.message);
      }
    },
    [currentProject, files, categories],
  );

  const handleRemoveFile = useCallback(
    async (fileId) => {
      if (!currentProject) return;

      try {
        const response = await ApiService.deleteFile(parseInt(fileId));

        if (response.success) {
          setFiles((prev) => prev.filter((file) => file.id !== fileId));
        }
      } catch (err) {
        setError("Erro ao remover arquivo: " + err.message);
      }
    },
    [currentProject],
  );

  const handleDownload = async () => {
    if (!currentProject) {
      setError("Nenhum projeto ativo");
      return;
    }

    try {
      const downloadUrl = ApiService.getDownloadUrl(currentProject.project_id);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = `Atividades_Complementares_${currentProject.name}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      setError("Erro ao baixar arquivo: " + err.message);
    }
  };

  const createNewProject = async () => {
    try {
      setLoading(true);
      const projectName = `Novo Projeto ${new Date().toLocaleDateString(
        "pt-BR",
      )} ${new Date().toLocaleTimeString("pt-BR")}`;
      const response = await ApiService.createProject(
        projectName,
        "Novo projeto de horas complementares",
      );
      setCurrentProject(response.data);
      setFiles([]);
      setError(null);
    } catch (err) {
      setError("Erro ao criar novo projeto: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const totalHours = files.reduce((sum, file) => sum + file.calculatedHours, 0);

  if (loading && !currentProject) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4 animate-spin" />
          <p className="text-muted-foreground">Carregando sistema...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h1 className="text-3xl">Sistema de Horas Complementares</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Organize seus documentos de atividades complementares, calcule
            automaticamente as horas e gere um arquivo compactado com tudo
            organizado por categoria.
          </p>

          {currentProject && (
            <div className="mt-4 flex items-center justify-center gap-4">
              <p className="text-sm text-muted-foreground">
                Projeto atual:{" "}
                <span className="font-medium">{currentProject.name}</span>
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={createNewProject}
                disabled={loading}
              >
                <Plus className="h-4 w-4 mr-2" />
                Novo Projeto
              </Button>
            </div>
          )}
        </div>

        {/* Error Alert */}
        {error && (
          <Alert className="mb-6" variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Total Geral */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-center">Resumo Geral</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-4xl mb-2">{totalHours.toFixed(2)}h</div>
              <div className="text-muted-foreground">
                Total de Horas Complementares
              </div>
              <div className="mt-4">
                <Button
                  onClick={handleDownload}
                  disabled={files.length === 0 || loading}
                  className="gap-2"
                >
                  <Download className="h-4 w-4" />
                  Baixar Arquivo Organizado (.zip)
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Categorias */}
        <div className="space-y-8">
          {categories.map((category) => (
            <CategorySection
              key={category.id}
              category={category}
              files={files}
              onFileDrop={handleFileDrop}
              onHoursChange={handleHoursChange}
              onRemoveFile={handleRemoveFile}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-muted-foreground">
          <p className="text-sm">
            Sistema desenvolvido para facilitar a organização de atividades
            complementares acadêmicas.
          </p>
          {currentProject && (
            <p className="text-xs mt-2">
              Projeto ID: {currentProject.project_id} | Total de arquivos:{" "}
              {files.length}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
