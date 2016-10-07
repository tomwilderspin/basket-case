#!/bin/sh

# run dev environment actions

set -e

SCRIPT_HOME="$( cd "$( dirname "$0" )" && pwd )"

cd $SCRIPT_HOME/..



case "$1" in
	start)
		vagrant up
		vagrant ssh -c "cd /vagrant && make run"
		;;
	stop)
		vagrant ssh -c "cd /vagrant && make stop"
		vagrant halt
		;;
	app-stop)
		vagrant ssh -c "cd /vagrant && make app-stop"
		;;
	restart)
		vagrant ssh -c "cd /vagrant && make run"
		;;
	ps)
		vagrant ssh -c "cd /vagrant && make ps"
		;;
	node-debug)
		vagrant ssh -c "cd /vagrant && make run-debug"
		;;
	test)
		vagrant ssh -c "cd /vagrant && make test"
		;;
	*)
		echo "options are: start, stop, ps, restart, node-debug [container status] "
		;;
esac
