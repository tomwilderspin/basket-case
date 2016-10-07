# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # All Vagrant configuration is done here. The most common configuration
  # options are documented and commented below. For a complete reference,
  # please see the online documentation at vagrantup.com.

  # Every Vagrant virtual environment requires a box to build off of.
  config.vm.box = "phusion/ubuntu-14.04-amd64"

  #ports
  #web
  config.vm.network "forwarded_port", guest: 80, host: 8080

  #shared dir
  config.vm.synced_folder ".", "/vagrant"

  #provision cmd for installing docker , docker-compose setting default permissions;
  provision_cmd =
    "wget -q -O - https://get.docker.io/gpg | apt-key add -;" \
    "echo deb https://apt.dockerproject.org/repo ubuntu-trusty main > /etc/apt/sources.list.d/docker.list;" \
    "apt-get update -qq; apt-get purge -q -y lxc-docker; apt-get install -q -y --force-yes docker-engine; " \
    "curl -L https://github.com/docker/compose/releases/download/1.5.2/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose;" \
    "chmod +x /usr/local/bin/docker-compose; " \
    "usermod -a -G docker vagrant; " \
    "apt-get install -y ant;"
  config.vm.provision :shell, :inline => provision_cmd
end
