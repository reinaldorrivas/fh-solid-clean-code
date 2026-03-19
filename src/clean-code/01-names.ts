interface File {
  id: number;
  toDelete: boolean;
}

export const cleanCodeNames = (): void => {
  // Ejemplo
  // Archivos a evaluar - files to evaluate
  const filesToEvaluate: File[] = [
    { id: 1, toDelete: false },
    { id: 2, toDelete: false },
    { id: 3, toDelete: true },
    { id: 4, toDelete: false },
    { id: 5, toDelete: false },
    { id: 7, toDelete: true },
  ];

  // Archivos marcados para borrar - files to delete
  const filesToDelete: File[] = filesToEvaluate.filter(
    (fileToEvaluate) => fileToEvaluate.toDelete,
  );

  abstract class User {}
  interface User {}
  class UserBase extends User {}

  // * TypeScript Mixin

  type Constructor<T = {}> = new (...args: any[]) => T;

  function Client<T extends Constructor>(Base: T) {
    return class extends Base {};
  }

  const client = Client(UserBase);

  // TODO: Tarea

  // día de hoy - today
  const currentDate: Date = new Date();

  // días transcurridos - elapsed time in days
  const elapsedDays: number = 23;

  // número de archivos en un directorio - number of files in directory
  const filesQuantityInDirectory: number = 33;

  // primer nombre - first name
  const firstName: string = "Fernando";

  // primer apellido - last name
  const lastName: string = "Herrera";

  // días desde la última modificación - days since modification
  const daysSinceLastModification: number = 12;

  // cantidad máxima de clases por estudiante - max classes per student
  const maxClassesPerStudent: number = 6;
};
