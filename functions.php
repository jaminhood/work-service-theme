<?php

define('WST_PATH', trailingslashit(get_stylesheet_directory()));

function work_service_load_custom_fonts()
{
  wp_enqueue_style('sansationBold', get_theme_file_uri('/assets/fonts/sansation/Sansation_Bold.ttf'));
  wp_enqueue_style('sansationRegular', get_theme_file_uri('/assets/fonts/sansation/Sansation_Regular.ttf'));
  wp_enqueue_style('sansationLight', get_theme_file_uri('/assets/fonts/sansation/Sansation_Light.ttf'));
  wp_enqueue_style('jostRegular', get_theme_file_uri('/assets/fonts/jost/static/Jost-Regular.ttf'));
}

add_action('wp_enqueue_scripts', 'work_service_load_custom_fonts');

function work_service_load_assets()
{
  wp_enqueue_script('ourmainjs', get_theme_file_uri('/build/index.js'), array('wp-element'), '1.0', true);
  wp_enqueue_style('ourmaincss', get_theme_file_uri('/build/index.css'));
}

add_action('wp_enqueue_scripts', 'work_service_load_assets');

function work_service_add_support()
{
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
}

add_action('after_setup_theme', 'work_service_add_support');

function work_service_rewrite_rules()
{
  add_rewrite_rule('ws-customer/([a-zA-Z0-9-]+)[/]?$', 'index.php?customer_page=$matches[1]', 'top');

  add_rewrite_rule('ws-customer/services/([a-zA-Z0-9-]+)[/]?$', 'index.php?service=$matches[1]', 'top');

  add_rewrite_rule('ws-customer/category/([a-zA-Z0-9-]+)[/]?$', 'index.php?category=$matches[1]', 'top');
}

add_action('init', 'work_service_rewrite_rules');

function work_service_query_vars($query_vars)
{
  $query_vars[] = 'customer_page';
  $query_vars[] = 'service';
  $query_vars[] = 'category';
  return $query_vars;
}

add_filter('query_vars', 'work_service_query_vars');

function work_service_template_include($template)
{
  if (get_query_var('customer_page') != false && get_query_var('customer_page') != '') {
    // if (!is_user_logged_in()) {
    //   wp_redirect(site_url('/'));
    // } else {
    return WST_PATH . 'includes/pages/customer/ws-customer-app-page.php';
    // }
  }

  if (get_query_var('service') != false && get_query_var('service') != '') {
    if (!is_user_logged_in()) {
      wp_redirect(site_url('/'));
    } else {
      return WST_PATH . 'includes/pages/customer/ws-service-page.php';
    }
  }

  if (get_query_var('category') != false && get_query_var('category') != '') {
    if (!is_user_logged_in()) {
      wp_redirect(site_url('/'));
    } else {
      return WST_PATH . 'includes/pages/customer/ws-category-page.php';
    }
  }

  return $template;
}

add_action('template_include', 'work_service_template_include');
