import React, { useCallback } from "react";
import { Upload } from "lucide-react";
import { Card } from "./ui/card";

interface FileUploadZoneProps {
  onFileDrop: (
    files: File[],
    subcategoryId: string,
    categoryId: string,
  ) => void;
  subcategoryId: string;
  categoryId: string;
  className?: string;
}

export function FileUploadZone({
  onFileDrop,
  subcategoryId,
  categoryId,
  className,
}: FileUploadZoneProps) {
  const [isDragOver, setIsDragOver] = React.useState(false);
  const inputId = `file-input-${categoryId}-${subcategoryId}`;

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);

      const files = Array.from(e.dataTransfer.files).filter(
        (file): boolean => file.type === "application/pdf",
      );

      if (files.length > 0) {
        onFileDrop(files, subcategoryId, categoryId);
      }
    },
    [onFileDrop, subcategoryId, categoryId],
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []).filter(
        (file) => file.type === "application/pdf",
      );

      if (files.length > 0) {
        onFileDrop(files, subcategoryId, categoryId);
      }
    },
    [onFileDrop, subcategoryId, categoryId],
  );

  return (
    <Card
      className={`p-4 border-2 border-dashed transition-colors cursor-pointer ${
        isDragOver
          ? "border-primary bg-primary/5"
          : "border-border hover:border-primary/50"
      } ${className}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        multiple
        accept=".pdf"
        onChange={handleFileInput}
        className="hidden"
        id={inputId}
      />
      <label
        htmlFor={inputId}
        className="flex flex-col items-center justify-center gap-2 cursor-pointer"
      >
        <Upload className="h-8 w-8 text-muted-foreground" />
        <div className="text-center">
          <p className="text-sm">
            Arraste arquivos PDF aqui ou clique para selecionar
          </p>
          <p className="text-xs text-muted-foreground">
            Apenas arquivos PDF são aceitos
          </p>
        </div>
      </label>
    </Card>
  );
}
