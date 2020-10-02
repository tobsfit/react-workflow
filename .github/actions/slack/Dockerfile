# Wir müssen composer noch installieren

FROM php:7.4.2
COPY --from=composer /usr/bin/composer /usr/bin/composer

WORKDIR /usr/src/app
COPY . .

# Wir brauchen noch zip
RUN apt-get update
RUN apt-get -y install zip

RUN composer install

ENTRYPOINT [ "php", "/usr/src/app/script.php" ]