import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ScreenSaver extends Component {
  render() {
    return (
      <div>
        <header>
		<div class="header">
			<h1 class="img-align">Store Manager</h1>
		</div>
	</header>
	<div class="containerlog">
		<form>
			<NavLink to="/login" class="button">Enter</NavLink>
		</form>
		
	</div>
<footer class="containerfooter"><small>AC-33 Copyright &copy;2018</small></footer>
      </div>
    )
  }
}

export default ScreenSaver;
