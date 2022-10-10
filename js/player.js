function player(name, domId, classDom, maxLife){
    this.name = '';
    this.dom = null;
    this.life = null;

    this.construct = function(name, domId, classDom, maxLife){
        this.init(name, domId, classDom, maxLife);
        this.display();
    };

    this.init = function(name, domId, classDom, maxLife){
        this.name = name;
        this.dom = document.getElementById(domId);
        this.life = new life(maxLife, this);
        this.dom.classList.add(classDom);
    };
    this.display = function(){
        document.getElementById(this.dom.id + '-name').innerHTML = this.name;
    };

    this.construct(name, domId, classDom, maxLife);
}