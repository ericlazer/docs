document.addEventListener('DOMContentLoaded', () => {
  const bgTilesDiv = document.createElement('div');
  bgTilesDiv.className = 'bg-tiles';
  bgTilesDiv.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/images/bg-tile.svg');
    background-repeat: repeat;
    background-size: 16px 16px;
    background-position: center center;
    opacity: 0.04;
    z-index: -1;
    pointer-events: none;
  `;
  
  document.body.insertBefore(bgTilesDiv, document.body.firstChild);
  console.log('Background tiles div injected:', bgTilesDiv);
});
