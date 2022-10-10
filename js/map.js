function map(domId, classDom){

    this.dom = null;

    this.construct = function(domId, classDom){
        this.init(domId, classDom);
    }
    this.init = function(domId, classDom){
        this.dom = document.getElementById(domId);
        this.dom.classList.add(classDom);

    }
    this.construct(domId, classDom);

}