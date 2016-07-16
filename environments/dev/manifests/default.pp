exec { "apt-get update":

path => "/usr/bin",

}

# package { "apache2":

# ensure => present,

# require => Exec["apt-get update"],

# }

# service { "apache2":

# ensure => "running",

# require => Package["apache2"],

# }

# file { "/var/www/demo":

# ensure => "link",

# target => "/vagrant/www",

# require => Package["apache2"],

# notify => Service["apache2"],

# }

package { 'npm':

ensure => present,

require => Exec["apt-get update"],

}

exec { "npm update":

path => "/usr/bin",

require => Package["npm"],

}

package { 'node':

ensure => present,

require => Exec["npm update"],

}

package { 'mongodb':

ensure => present,

require => Package["node"],

}

if $operatingsystem == 'Ubuntu' {
  notice("I dont know what to think about ${operatingsystem}. Its a ${osfamily}, isnt it?")
}

notice(hiera('hieratest::notice'))
