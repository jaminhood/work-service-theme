<?php

if (!defined('ABSPATH')) exit(); # No direct access allowed.

/**
 * variables
 */
$page = get_query_var('customer_page');
// $page = get_query_var('service');

/**
 * Confirm if its the queried page
 */
if ($page != false && $page != '') :
  /**
   * This file will create customers app.
   */
  if (!class_exists('Work_Service_Customers_App')) :
    class Work_Service_Customers_App
    {
      public function __construct()
      {
        require_once(WST_PATH . 'includes/pages/templates/ws-header.php');
        switch (strtolower(get_query_var('customer_page'))) {
          case 'dashboard':
            $this->dashboard();
            break;
          case 'bookings':
            $this->bookings();
            break;
          case 'chat':
            $this->chat();
            break;
          case 'profile':
            $this->profile();
            break;
          default:
            break;
        }
        require_once(WST_PATH . 'includes/pages/templates/ws-footer.php');
      }

      private function dashboard()
      {
        echo '<div id="work-service-customer-dashboard"></div>';
      }

      private function bookings()
      {
        echo '<div id="work-service-customer-bookings"></div>';
      }

      private function chat()
      {
        echo '<div id="work-service-customer-chat"></div>';
      }

      private function profile()
      {
        echo '<div id="work-service-customer-profile"></div>';
      }
    }
    new Work_Service_Customers_App();
  endif;
endif;
