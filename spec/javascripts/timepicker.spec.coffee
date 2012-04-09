describe "timepicker", ->
	beforeEach ->
		jasmine.getFixtures().set("<input type='text' id='start_time' name='start_time' />")
		$("#start_time").timepicker()

	afterEach ->
		$("#start_time").timepicker("destroy")

	describe "creates the correct picker div", ->

		it "should add a div with the id of 'start_time_timepicker' to the body", ->
			expect($("body")).toContain("#start_time_timepicker")

		it "should properly scope the div for all instances of the widget", ->
			jasmine.getFixtures().set("<input type='text' id='end_time' name='end_time' />")
			$("#end_time").timepicker();
			expect($("body")).toContain("#end_time_timepicker")

		it "should create a unique id for a picker attached to a an input element without an id", ->
			jasmine.getFixtures().set("<input type='text' name='some_time' class='someTimeInput' />")
			spyOn(Date.prototype, "getTime").andReturn(123456)
			$(".someTimeInput").timepicker();
			expect($("body")).toContain("#123456_timepicker")

		it "should contain columns", ->
			expect($("#start_time_timepicker")).toContain(".ui-timepicker-column")

		it "should contain AM and PM columns", ->
			expect($("#start_time_timepicker .ui-timepicker-header:first")).toHaveText("AM")
			expect($("#start_time_timepicker .ui-timepicker-header:last")).toHaveText("PM")

		
