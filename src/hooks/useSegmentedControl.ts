const useSegmentedControl = () => {
  const changeSegment = (target: Element, parent: HTMLElement, selection: HTMLElement) => {
    const parentRect = parent.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    const left = targetRect.left - parentRect.left;
    const width = targetRect.width;

    selection.style.left = `${left}px`;
    selection.style.width = `${width}px`;
  };

  return { changeSegment };
};

export default useSegmentedControl;
