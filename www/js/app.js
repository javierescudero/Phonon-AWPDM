phonon.options({
	navigator:{
		defaultPage: 'home',
		animatePages: true,
		enableBrowserBackbUTTON: true,
		templateRootDirectory: './tp1'
	},
	i18n:null
});

var app = phonon.navigator();
app.on({page: 'home', preventClose: false, content: null});

app.on({page: 'pagetwo', preventClose: true, content: 'pagetwo.html', readyDelay:1},
 function(activity){
 	var action = null;

 	var onAction = function(evt){
 		var target = evt.target;
 		action = 'ok';

 		if (target.getAtribute('data-order')==='order') {
 			phonon.alert('Gracias por su compra =)', 'Estimado cliente');
 		}else{
 			phonon.alert('su orden ha sido cancelada', 'estimado cliente');
 		}
 	};
 	activity.onCreate(function(function(){
 		document.querySelector('.order').on('tap', onAction);
 		document.querySelector('cancel1').on('tap', onAction);
 	});
 	activity.onClose(function(self){
 		if(action !== null){
 			self.close();
 		}else{
 			phonon.alert('Antes de dejar esta página, debes realizar una acción', "acci+on requerida");
 		}
 	});
 	activity.onHidden(function(){
 		action=null;
 	});
 	activity.onHashChanged(function(pizza){
 		document.querySelector('.pizza').textContent = pizza;
 	});
 });
 	app.star();