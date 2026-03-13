const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || "/api").replace(
  /\/$/,
  "",
);

class ApiService {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const isFormData = options.body instanceof FormData;
    const config = {
      headers: isFormData
        ? { ...options.headers }
        : {
            "Content-Type": "application/json",
            ...options.headers,
          },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro na requisição");
      }

      return data;
    } catch (error) {
      console.error("Erro na API:", error);
      throw error;
    }
  }

  // Categorias
  async getCategories() {
    return this.request("/categories");
  }

  // Projetos
  async createProject(name, description = "") {
    return this.request("/projects", {
      method: "POST",
      body: JSON.stringify({ name, description }),
    });
  }

  async getProject(projectId) {
    return this.request(`/projects/${projectId}`);
  }

  async getProjectFiles(projectId) {
    return this.request(`/projects/${projectId}/files`);
  }

  async getProjectSummary(projectId) {
    return this.request(`/projects/${projectId}/summary`);
  }

  // Upload de arquivos
  async uploadFile(projectId, file, categoryId, subcategoryId, inputHours = 0) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("category_id", categoryId);
    formData.append("subcategory_id", subcategoryId);
    formData.append("input_hours", inputHours.toString());

    return this.request(`/projects/${projectId}/upload`, {
      method: "POST",
      body: formData,
    });
  }

  // Gerenciamento de arquivos
  async updateFileHours(fileId, inputHours) {
    return this.request(`/files/${fileId}/hours`, {
      method: "PUT",
      body: JSON.stringify({ input_hours: inputHours }),
    });
  }

  async deleteFile(fileId) {
    return this.request(`/files/${fileId}`, {
      method: "DELETE",
    });
  }

  // Cálculo de horas
  async calculateHours(inputHours, subcategoryId) {
    return this.request("/calculate-hours", {
      method: "POST",
      body: JSON.stringify({
        input_hours: inputHours,
        subcategory_id: subcategoryId,
      }),
    });
  }

  // Download do projeto
  getDownloadUrl(projectId) {
    return `${API_BASE_URL}/projects/${projectId}/download`;
  }

  // Health check
  async healthCheck() {
    return this.request("/health");
  }
}

export default new ApiService();
