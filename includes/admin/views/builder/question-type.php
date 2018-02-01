<?php
/**
 * Builder quiz type template
 * @since   [version]
 * @version [version]
 */
?>
<script type="text/html" id="tmpl-llms-question-type-template">

	<# if ( data.get( 'upgrade' ) ) { #>
		<a class="llms-type-unavailable tip--top-right" href="{{{ data.get( 'upgrade' ) }}}" data-tip="<?php esc_attr_e( 'Install the LifterLMS Advanced Quizzes add-on to enable this question type', 'lifterlms' ); ?>" target="_blank">
	<# } #>
	<button class="llms-element-button small llms-add-question" data-id="{{{ data.get( 'id' ) }}}">
		<i class="fa fa-{{{ data.get( 'icon' ) }}}" aria-hidden="true"></i> {{{ data.get( 'name' ) }}}
	</button>
	<# if ( data.get( 'upgrade' ) ) { #>
		</a>
	<# } #>
</script>
