import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { FileUploadZone } from './FileUploadZone';
import { FileList } from './FileList';
import { Subcategory, UploadedFile } from '../types/hours';

interface SubcategoryCardProps {
  subcategory: Subcategory;
  categoryId: string;
  files: UploadedFile[];
  onFileDrop: (files: File[], subcategoryId: string, categoryId: string) => void;
  onHoursChange: (fileId: string, hours: number) => void;
  onRemoveFile: (fileId: string) => void;
}

export function SubcategoryCard({
  subcategory,
  categoryId,
  files,
  onFileDrop,
  onHoursChange,
  onRemoveFile
}: SubcategoryCardProps) {
  const totalHours = files.reduce((sum, file) => sum + file.calculatedHours, 0);
  const progressPercentage = Math.min((totalHours / subcategory.maxHours) * 100, 100);

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{subcategory.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{subcategory.description}</p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progresso:</span>
            <span>{totalHours}h / {subcategory.maxHours}h</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
          <p className="text-xs text-muted-foreground text-right">
            {progressPercentage.toFixed(1)}% concluído
          </p>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <FileUploadZone
          onFileDrop={onFileDrop}
          subcategoryId={subcategory.id}
          categoryId={categoryId}
        />
        
        <FileList
          files={files}
          onHoursChange={onHoursChange}
          onRemoveFile={onRemoveFile}
        />
      </CardContent>
    </Card>
  );
}