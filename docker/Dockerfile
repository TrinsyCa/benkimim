# Base image olarak resmi PHP imajını kullanıyoruz
FROM php:8.1-fpm

# Çalışma dizinini ayarlıyoruz
WORKDIR /var/www

# Gerekli bağımlılıkları yüklüyoruz
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    locales \
    zip \
    unzip \
    git \
    curl \
    libonig-dev \
    libxml2-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install pdo_mysql gd mbstring exif pcntl bcmath xml

# Composer'ı yüklüyoruz
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Node.js 20 LTS ve npm'yi yüklüyoruz (frontend bağımlılıkları için)
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# Proje dosyalarını kopyalıyoruz
COPY . /var/www

# Bağımlılıkları yüklüyoruz
RUN composer install --no-interaction --optimize-autoloader --no-dev
RUN npm install && npm run build

# Dosya izinlerini ayarlıyoruz
RUN chown -R www-data:www-data /var/www \
    && chmod -R 755 /var/www/storage /var/www/bootstrap/cache

# PHP-FPM'i başlatıyoruz
CMD ["php-fpm"]