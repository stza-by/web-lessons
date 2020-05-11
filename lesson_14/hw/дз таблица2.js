document.onclick = function(e) {
    const t = e.target
    if (t.tagName === 'BUTTON') {
      t.innerHTML = (t.innerHTML | 0) + 1
    }
  } 

  document.querySelector('.btnNew').onclick = function(e) {

    const theDiv = document.createElement('button');
    theDiv.innerHTML = 'click me';
    
    this.parentNode.insertBefore(theDiv, this.previousSibling);
    console.log(this);
    getComputedStyle(theDiv).opacity;
    theDiv.style.opacity = '1';
  }
