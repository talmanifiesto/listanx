document.addEventListener('DOMContentLoaded', function () {
	var modalm = document.querySelectorAll('.modal');
	var elems = document.querySelectorAll('.datepicker');
	var instancesModal = M.Modal.init(modalm);
	var instances = M.Datepicker.init(elems, {
		format: 'dd-mm-yyyy',
		defaultDate: new Date(),
		setDefaultDate: true,
		i18n: {
			cancel: 'Cancelar',
			clear: 'Limpiar',
			done: 'OK',
			close: 'Cerrar',
			default: 'now',
			today: 'Hoy',
			closeOnSelect: false,
			format: 'dd/mmm/yyyy',
			selectMonths: true,
			previousMonth: '<',
			nextMonth: '>',
			months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
			monthsShort: ['Ene', 'Feb', 'Mar', 'Ab', 'May', 'Jun', 'Jul', 'Ag', 'Sept', 'Oct', 'Nov', 'Dic'],
			firstDay: true,
			weekdays: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
			weekdaysShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
			weekdaysAbbrev: ['L', 'M', 'M', 'J', 'V', 'S', 'D']
		}
	});
});