publish:
	rm -rf docs
	./hugo
	git add .
	git commit -m "$(msg)"
	git push origin master

serve:
	./hugo server -D
