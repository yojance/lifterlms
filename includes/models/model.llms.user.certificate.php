<?php
/**
 * LifterLMS User Certificate
 * @since    3.8.0
 * @version  3.9.0
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

class LLMS_User_Certificate extends LLMS_Post_Model {

	protected $db_post_type = 'llms_my_certificate';
	protected $model_post_type = 'certificate';

	protected $properties = array(
		'certificate_title' => 'string',
		'certificate_image' => 'absint',
		// 'certificate_content' => 'html', // use get( 'content' )
		'certificate_template' => 'absint',
	);

	/**
	 * Get the WP Post ID of the post which triggered the earning of the certificate
	 * This would be a lesson, course, section, track, etc...
	 * @return   int
	 * @since    3.8.0
	 * @version  3.8.0
	 */
	public function get_related_post_id() {
		$meta = $this->get_user_postmeta();
		return $meta->post_id;
	}

	/**
	 * Retrieve the user id of the user who earned the certificate
	 * @return   int
	 * @since    3.8.0
	 * @version  3.9.0
	 */
	public function get_user_id() {
		$meta = $this->get_user_postmeta();
		return isset( $meta->user_id ) ? $meta->user_id : null;
	}

	/**
	 * Retrieve user postmeta data for the certificate
	 * @return   obj
	 * @since    3.8.0
	 * @version  3.8.0
	 */
	public function get_user_postmeta() {
		global $wpdb;
		return $wpdb->get_row( $wpdb->prepare(
			"SELECT user_id, post_id FROM {$wpdb->prefix}lifterlms_user_postmeta WHERE meta_value = %d AND meta_key = '_certificate_earned'",
			$this->get( 'id' )
		) );
	}

}
