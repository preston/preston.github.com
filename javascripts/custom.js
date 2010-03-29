
function changeContent(name) {
	var blurbs = $$('.blurb');
	blurbs.each(function(b) {
		if(b.getStyle('display') == 'none') {
			// element is already hidden
		} else if(b.id == name) {
			// don't hide it because the user wants to see it.
		}
		else {
			Effect.SlideUp(b);
		}
	})
	var e = $(name); 
	if(e.getStyle('display') != 'block') {
		Effect.SlideDown(e, 'appear'); // show the new div
	}
}
