export function modifyDomForModal () {
  const classNameWithModal = 'with-modal';
  const htmlElement = document.documentElement;
  const navbarElement = document.getElementsByClassName('navbar')[0];
  const scrollbarWidth = window.innerWidth - htmlElement.offsetWidth;

  return {
    addModal: () => {
      if (htmlElement && navbarElement) {
        htmlElement.setAttribute('style', `padding-right: ${scrollbarWidth}px`)
        navbarElement.setAttribute('style', `width: calc(100% - ${scrollbarWidth}px)`);
        htmlElement.classList.add(classNameWithModal);
      }
    },

    removeModal: () => {
      if (htmlElement && navbarElement) {
        htmlElement.classList.remove(classNameWithModal);
        htmlElement.removeAttribute('style');
        navbarElement.removeAttribute('style');
      }
    }
  }
}