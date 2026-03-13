import React from 'react';
import { FileText, Trash2 } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { UploadedFile } from '../types/hours';

interface FileListProps {
  files: UploadedFile[];
  onHoursChange: (fileId: string, hours: number) => void;
  onRemoveFile: (fileId: string) => void;
}

export function FileList({ files, onHoursChange, onRemoveFile }: FileListProps) {
  if (files.length === 0) {
    return null;
  }

  return (
    <div className="space-y-2">
      {files.map((file) => (
        <Card key={file.id} className="p-3">
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            
            <div className="flex-1 min-w-0">
              <p className="text-sm truncate">{file.name}</p>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex flex-col gap-1">
                <Input
                  type="number"
                  placeholder="Horas"
                  min="0"
                  step="0.5"
                  value={file.inputHours || ''}
                  onChange={(e) => onHoursChange(file.id, Number(e.target.value))}
                  className="w-20 h-8 text-xs"
                />
                {file.calculatedHours > 0 && (
                  <span className="text-xs text-muted-foreground text-center">
                    = {file.calculatedHours}h
                  </span>
                )}
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onRemoveFile(file.id)}
                className="h-8 w-8 p-0"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}