export default function taskBlock(trueOrFalse) {
  let task = false; // Usando 'let' para permitir reasignaciones
  let task2 = true; // Usando 'let' para permitir reasignaciones

  if (trueOrFalse) {
    task = true; // Modificando la variable 'task' directamente
    task2 = false; // Modificando la variable 'task2' directamente
  }

  return [task, task2];
}
