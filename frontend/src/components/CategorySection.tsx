import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { SubcategoryCard } from "./SubcategoryCard";
import { Category, UploadedFile } from "../types/hours";

interface CategorySectionProps {
  category: Category;
  files: UploadedFile[];
  onFileDrop: (
    files: File[],
    subcategoryId: string,
    categoryId: string
  ) => void;
  onHoursChange: (fileId: string, hours: number) => void;
  onRemoveFile: (fileId: string) => void;
}

export function CategorySection({
  category,
  files,
  onFileDrop,
  onHoursChange,
  onRemoveFile,
}: CategorySectionProps) {
  const categoryFiles = files.filter((file) => file.categoryId === category.id);
  const totalCategoryHours = categoryFiles.reduce(
    (sum, file) => sum + file.calculatedHours,
    0
  );
  const maxCategoryHours = category.subcategories.reduce(
    (sum, sub) => sum + sub.maxHours,
    0
  );

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-xl">{category.title}</CardTitle>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Total da categoria:</span>
          <span>
            {totalCategoryHours}h / {maxCategoryHours}h
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {category.subcategories.map((subcategory) => {
          const subcategoryFiles = categoryFiles.filter(
            (file) => file.subcategoryId === subcategory.id
          );

          return (
            <SubcategoryCard
              key={subcategory.id}
              subcategory={subcategory}
              categoryId={category.id}
              files={subcategoryFiles}
              onFileDrop={onFileDrop}
              onHoursChange={onHoursChange}
              onRemoveFile={onRemoveFile}
            />
          );
        })}
      </CardContent>
    </Card>
  );
}
