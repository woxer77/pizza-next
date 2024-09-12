const useSegmentedControl = () => {
  const changeSegment = (target: EventTarget, parent: HTMLDivElement, selection: HTMLDivElement) => {
    const targetElement = target as Element;

    const parentRect = parent.getBoundingClientRect();
    const targetRect = targetElement.getBoundingClientRect();

    const left = targetRect.left - parentRect.left;
    const width = targetRect.width;

    selection.style.left = `${left}px`;
    selection.style.width = `${width}px`;
  };

  return { changeSegment };
};

export default useSegmentedControl;
