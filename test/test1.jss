#main{
   	.menu(menu_object){
   		:load{
			this.action_count = 1;
   		}
   		:jss:increment_action_count{
			this.action_count += 1;
			$('div.action_count', this).text(menu_object.action_count);
   		}
   		button.add_user:click{
			var user = $('div.user_template').clone();
			user.removeClass('user_template');
			$('div.user_list').append(user);

			$(menu_object).trigger('jss:increment_action_count');
   		}
   	}
   	.user_list{
   		.user(user_object){
   			button.del_user:click{
   				$(user_object).detach();
   			}
   		}
   	}
   }