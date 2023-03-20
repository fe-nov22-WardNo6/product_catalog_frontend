export const getGridClass = (width: number, i: number) => {
  const gridClassArray = [];
  if (width > 1199) {
    if ((i + 1) % 4 === 3) {
      gridClassArray.push('grid__item-desktop--13-18');
    }
    if ((i + 1) % 4 === 2) {
      gridClassArray.push('grid__item-desktop--7-12');
    }
    if ((i + 1) % 4 === 1) {
      gridClassArray.push('grid__item-desktop--1-6');
    }
    if ((i + 1) % 4 === 0) {
      gridClassArray.push('grid__item-desktop--19-24');
    }
  }

  if (width <= 1199 && width > 768) {
    if ((i + 1) % 3 === 2) {
      gridClassArray.push('grid__item-landscape--5-8');
    }
    if ((i + 1) % 3 === 1) {
      gridClassArray.push('grid__item-landscape--1-4');
    }
    if ((i + 1) % 3 === 0) {
      gridClassArray.push('grid__item-landscape--9-12');
    }
  }

  if (width <= 768 && width > 639) {
    if ((i + 1) % 2 !== 0) {
      gridClassArray.push('grid__item-tablet--1-6');
    }
    if ((i + 1) % 2 === 0) {
      gridClassArray.push('grid__item-tablet--7-12');
    }
  }

  return gridClassArray.join(' ');
};
