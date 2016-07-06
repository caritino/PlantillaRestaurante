;(function(){

	let sticky = false

	console.log($(window).height());

	$(window).scroll(function(){
		const inBottom = isInBottom()

		if(inBottom && !sticky){
			// Mostrar la navegacion sticky
			console.log("Cambiar la navegación")
			sticky = true
			stickNavigation()
		}else if(!inBottom && sticky){
			// Ocultar la navegacion sticky
			console.log("Regresar la navegación")
			sticky = false
			unStickNavigation()
		}
	})

	function stickNavigation(){
		$("#description").addClass("fixed").removeClass("absolute")
		$("#navigation").addClass("hidden")
		$("#sticky-navigation").removeClass("hidden")
	}

	function unStickNavigation(){
		$("#description").removeClass("fixed").addClass("absolute")
		$("#navigation").removeClass("hidden")
		$("#sticky-navigation").addClass("hidden")
	}

	function isInBottom(){
		const $description = $("#description")
		const descriptionHeight = $description.height()

		return $(window).scrollTop() > $(window).height() - (descriptionHeight * 1.5)

	}

})()