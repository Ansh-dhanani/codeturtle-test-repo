// Seeded defect: untrusted HTML assigned to innerHTML
export function renderComment(element: HTMLElement, input: string): void {
  element.innerHTML = input;
}
