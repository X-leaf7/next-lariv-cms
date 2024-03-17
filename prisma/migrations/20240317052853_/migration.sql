-- CreateTable
CREATE TABLE `profile` (
    `id` INTEGER NOT NULL,
    `firstName` VARCHAR(50) NULL,
    `lastName` VARCHAR(50) NULL,
    `age` VARCHAR(50) NULL,
    `mobile` VARCHAR(50) NULL,
    `img` LONGTEXT NULL,
    `email` VARCHAR(50) NULL,
    `password` VARCHAR(50) NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `profile_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `home_page` (
    `id` INTEGER NOT NULL,
    `top_section_subTitleColor` VARCHAR(400) NULL,
    `top_section_subTitle` VARCHAR(400) NULL,
    `top_section_heading_title_1` VARCHAR(400) NULL,
    `top_section_heading_title_2` VARCHAR(400) NULL,
    `top_section_heading_title_3` VARCHAR(400) NULL,
    `top_section_description` LONGTEXT NULL,
    `top_section_button_cover_text` VARCHAR(400) NULL,
    `top_section_button_cover_link` VARCHAR(400) NULL,
    `counter_section_one_count_number` VARCHAR(400) NULL,
    `counter_section_one_count_des` VARCHAR(400) NULL,
    `counter_section_two_count_number` VARCHAR(400) NULL,
    `counter_section_two_count_des` VARCHAR(400) NULL,
    `counter_section_three_count_number` VARCHAR(400) NULL,
    `counter_section_three_count_des` VARCHAR(400) NULL,
    `profile_img` LONGTEXT NULL,
    `profile_shape_counter` VARCHAR(400) NULL,
    `profile_shape_text` VARCHAR(400) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `about_page` (
    `id` INTEGER NOT NULL,
    `top_title_heading` VARCHAR(400) NULL,
    `top_title_heading_theme_color` VARCHAR(400) NULL,
    `top_title_subHeading` VARCHAR(400) NULL,
    `about_profile_img` LONGTEXT NULL,
    `info_content_email` VARCHAR(400) NULL,
    `info_content_address` VARCHAR(400) NULL,
    `social_link_facebook` VARCHAR(400) NULL,
    `social_link_twitter` VARCHAR(400) NULL,
    `social_link_linkdin` VARCHAR(400) NULL,
    `social_link_git` VARCHAR(400) NULL,
    `button_title` VARCHAR(400) NULL,
    `button_link` VARCHAR(400) NULL,
    `top_about_section_heading_title` VARCHAR(400) NULL,
    `top_about_section_heading_title_color` VARCHAR(400) NULL,
    `top_about_section_des` VARCHAR(400) NULL,
    `personal_section_heading_title` VARCHAR(400) NULL,
    `personal_section_inner_action_fullName` VARCHAR(400) NULL,
    `personal_section_inner_action_birthday` VARCHAR(400) NULL,
    `personal_section_inner_action_email` VARCHAR(400) NULL,
    `personal_section_inner_action_skype` VARCHAR(400) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `portfolio_page` (
    `id` INTEGER NOT NULL,
    `heading_title` VARCHAR(400) NULL,
    `heading_title_color` VARCHAR(400) NULL,
    `heading_title_des` VARCHAR(400) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `service_page` (
    `id` INTEGER NOT NULL,
    `heading_title` VARCHAR(400) NULL,
    `heading_title_color` VARCHAR(400) NULL,
    `heading_title_des` VARCHAR(400) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blog_page` (
    `id` INTEGER NOT NULL,
    `heading_title` VARCHAR(400) NULL,
    `heading_title_color` VARCHAR(400) NULL,
    `heading_title_des` LONGTEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contact_page` (
    `id` INTEGER NOT NULL,
    `heading_title` VARCHAR(400) NULL,
    `heading_title_color` VARCHAR(400) NULL,
    `heading_title_des` VARCHAR(400) NULL,
    `contact_form_heading` VARCHAR(400) NULL,
    `contact_info_google_map` VARCHAR(400) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `portfolio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(400) NULL,
    `category` VARCHAR(400) NULL,
    `link` VARCHAR(400) NULL,
    `img` LONGTEXT NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `service` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(400) NULL,
    `des` VARCHAR(400) NULL,
    `img` LONGTEXT NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(400) NULL,
    `keywords` VARCHAR(400) NULL,
    `short_des` VARCHAR(400) NULL,
    `long_des` LONGTEXT NULL,
    `img` LONGTEXT NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `message` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(400) NULL,
    `email` VARCHAR(400) NULL,
    `website` VARCHAR(400) NULL,
    `long_des` LONGTEXT NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(400) NULL,
    `email` VARCHAR(400) NULL,
    `comment` LONGTEXT NULL,
    `approve` BOOLEAN NULL DEFAULT false,
    `blogId` INTEGER NOT NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `experience` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(400) NULL,
    `company` VARCHAR(400) NULL,
    `time_section` VARCHAR(400) NULL,
    `long_des` LONGTEXT NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `education` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(400) NULL,
    `institute` VARCHAR(400) NULL,
    `time_section` VARCHAR(400) NULL,
    `long_des` LONGTEXT NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `skill` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(400) NULL,
    `category` VARCHAR(400) NULL,
    `time_section` VARCHAR(400) NULL,
    `subject` VARCHAR(400) NULL,
    `percent` VARCHAR(400) NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `review` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(400) NULL,
    `address` VARCHAR(400) NULL,
    `img` VARCHAR(400) NULL,
    `long_des` LONGTEXT NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `visitor_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ip` VARCHAR(400) NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `comment` ADD CONSTRAINT `comment_blogId_fkey` FOREIGN KEY (`blogId`) REFERENCES `blog`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
