document.getElementById("btn_open-user").addEventListener("click", open_close_menu);

var btn_open_user = document.getElementById("btn_open-user");
var user_menu = document.getElementById("menu_user");



	function open_close_menu(){
		user_menu.classList.toggle("menu__user_move");
	}


if (window.innerWidth < 760){

	user_menu.classList.add("menu__user_move");
}

window.addEventListener("resize", function(){

if (window.innerWidth > 760){


	user_menu.classList.remove("menu__user_move");
}

if (window.innerWidth < 760){

	user_menu.classList.add("menu__user_move");
}

});