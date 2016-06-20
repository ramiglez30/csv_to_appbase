class MappingObj {
    sourceName: string;
    fileType: string;
    formName: string;
    isFirstColumnHeading: boolean;
    mappingProperties: Array<MappingProperty>;
   
}

class MappingProperty {
    fileColumn: FileColumn;
    formColumn: FormColumn;
}

class FileColumn {
     colStart: number;
     colEnd: number;
     colIndex: number;
     isIgnored: boolean;
}

class FormColumn {
      name: string;
      type: string;
      order: number;
      isReference: boolean;
}

class Reference{
    formName: string;
    fieldName: string;
}

