all:
	rm -rf docs
	./hugo
	git add .
	git commit -m "$(msg)"
	git push origin master
