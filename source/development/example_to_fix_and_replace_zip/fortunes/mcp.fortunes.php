<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/* 
===================================================== 
ExpressionEngine - by EllisLab 
----------------------------------------------------- 
http://expressionengine.com/ 
----------------------------------------------------- 
Copyright (c) 2003 - 2004 EllisLab Corp. 
===================================================== 
THIS IS COPYRIGHTED SOFTWARE 
PLEASE READ THE LICENSE AGREEMENT 
http://expressionengine.com/docs/license.html 
===================================================== 
File: mcp.fortunes.php 
----------------------------------------------------- 
Purpose: Fortunes module - CP 
===================================================== 
*/ 

class Fortunes_mcp { 

	var $version	= '1.0'; 
	var $view_limit	= 25;  // Number of words to show in View Fortunes 
	 
	 
	// ------------------------- 
	//  Constructor 
	// ------------------------- 
	 
	function Fortunes_mcp( $switch = TRUE ) 
	{ 
		global $IN; 
		 
		if ($switch) 
		{ 
			switch($IN->GBL('P')) 
			{ 
				 case 'view'	: $this->view_fortunes(); 
					 break;	 
				 case 'delete'	: $this->delete_fortune(); 
					 break; 
				 case 'add'		: $this->modify_fortune(); 
					 break; 
				 case 'modify'	: $this->modify_fortune(); 
					 break; 
				 case 'update'	: $this->update_fortune(); 
					 break; 
				 default		: $this->fortunes_home(); 
					 break; 
			} 
		} 
	} 
	// END 
	 
	 
	// ---------------------------------------- 
	//  Module Homepage 
	// ---------------------------------------- 

	function fortunes_home() 
	{ 
		global $DSP, $LANG;		 
		 
		// ------------------------------------------------------- 
		//  HTML Title and Navigation Crumblinks 
		// ------------------------------------------------------- 
		 
		$DSP->title = $LANG->line('fortunes_module_name'); 
		$DSP->crumb = $DSP->anchor(BASE. 
								   AMP.'C=modules'. 
								   AMP.'M=fortunes', 
								   $LANG->line('fortunes_module_name'));									 
		$DSP->crumb .= $DSP->crumb_item($LANG->line('fortunes_menu'));	 
		 
		// ------------------------------------------------------- 
		//  Page Heading 
		// ------------------------------------------------------- 
		 
		$DSP->body .= $DSP->heading($LANG->line('fortunes_menu'));	
		 
		// ------------------------------------------------------- 
		//  Main Menu Links - Add Fortune or View Fortunes 
		// ------------------------------------------------------- 
		 
		$DSP->body .= $DSP->qdiv('itemWrapper', $DSP->heading($DSP->anchor(BASE. 
																		   AMP.'C=modules'. 
																		   AMP.'M=fortunes'. 
																		   AMP.'P=add', 
																		   $LANG->line('add_fortune')), 
																		   5)); 
																			
		$DSP->body .= $DSP->qdiv('itemWrapper', $DSP->heading($DSP->anchor(BASE. 
																		   AMP.'C=modules'. 
																		   AMP.'M=fortunes'. 
																		   AMP.'P=view', 
																		   $LANG->line('view_fortunes')), 
																		   5)); 
																																   
	} 
	// END 
	 

	// ------------------------- 
	//  View Fortunes 
	// ------------------------- 
	 
	function view_fortunes($msg='') 
	{ 
		global $DSP, $LANG, $DB, $FNS; 
		 
		// ------------------------------------------------------- 
		//  Select All Fortunes from Database 
		// ------------------------------------------------------- 
		 
		$query = $DB->query("SELECT * FROM exp_fortunes"); 
								 
		if ($query->num_rows == 0) 
		{ 
			$DSP->body .= $DSP->error_message($LANG->line('no_fortunes'));		 
			return; 
		   } 

		   // ------------------------------------------------------- 
		//  HTML Title and Navigation Crumblinks 
		// ------------------------------------------------------- 
		 
		   $DSP->title = $LANG->line('fortunes_module_name'); 
		$DSP->crumb = $DSP->anchor(BASE. 
								   AMP.'C=modules'. 
								   AMP.'M=fortunes', 
								   $LANG->line('fortunes_module_name')); 
									
		$DSP->crumb .= $DSP->crumb_item($LANG->line('view_fortunes'));	 
		 
		// ------------------------------------------------------- 
		//  Page Heading and Success Message, if any 
		// ------------------------------------------------------- 
		 
		$r = $DSP->heading($LANG->line('view_fortunes')); 
		 
		if ($msg != '') 
		{ 
			$r .= $DSP->qdiv('success', $msg).BR; 
		} 
			
		// ------------------------------------------------------- 
		//  Table and Table Headers 
		// ------------------------------------------------------- 
		 
		$r .= $DSP->table('tableBorder', '0', '0', '100%'). 
			  $DSP->tr(). 
			  $DSP->td('tablePad'); 
			   
		$r .= $DSP->table('', '0', '', '100%'). 
			  $DSP->tr(). 
			  $DSP->table_qcell('tableHeadingBold', 
								array( 
										$LANG->line('fortune_text'), 
										$LANG->line('modify_fortune'), 
										$LANG->line('delete_fortune') 
									 ) 
								). 
			  $DSP->tr_c(); 

		$i = 0; 
		 
		// ------------------------------------------------------- 
		//  Display Rows of Fortunes 
		// ------------------------------------------------------- 
		 
		foreach($query->result as $row) 
		{ 
			$style = ($i++ % 2) ? 'tableCellOne' : 'tableCellTwo'; 
					   
			$r .= $DSP->tr(); 

			$r .= $DSP->table_qcell($style, $FNS->word_limiter($row['fortune_text'],$this->view_limit),'70%','top'); 
			 
			$r .= $DSP->table_qcell($style, $DSP->anchor(BASE. 
														  AMP.'C=modules'. 
														  AMP.'M=fortunes'. 
														  AMP.'P=modify'. 
														  AMP.'fortune_id='. 
														  $row['fortune_id'], 
														  $LANG->line('modify_fortune')),'15%','top'); 
														   
			$r .= $DSP->table_qcell($style, $DSP->anchor(BASE. 
														  AMP.'C=modules'. 
														  AMP.'M=fortunes'. 
														  AMP.'P=delete'. 
														  AMP.'fortune_id='. 
														  $row['fortune_id'], 
														  $LANG->line('delete_fortune')),'15%','top'); 
														   
			$r .= $DSP->tr_c(); 
			 
		} 
		 
		// ------------------------------------------------------- 
		//  Close Table and Output to $DSP->body 
		// ------------------------------------------------------- 

		$r .= $DSP->table_c(); 

		$r .= $DSP->td_c()	
			 .$DSP->tr_c()	   
			 .$DSP->table_c(); 
		 
		$DSP->body .= $r; 
		 
	 } 
	 // END 

	 
	// ------------------------- 
	//  Add/Modify Fortune Form 
	// ------------------------- 
	 
	function modify_fortune($msg='') 
	{ 
		global $DSP, $LANG, $DB, $IN; 
		 
		// ------------------------------------------------------- 
		//  If Modfying Existing Fortune, Retrieve Text 
		// ------------------------------------------------------- 
		 
		if ( ! $IN->GBL('fortune_id')) 
		{ 
			$fortune_text = ''; 
		} 
		else 
		{ 
			$query = $DB->query("SELECT fortune_text 
								 FROM exp_fortunes 
								 WHERE fortune_id = '".$IN->GBL('fortune_id')."'"); 
								 
			if ($query->num_rows == 0) 
			{ 
				$DSP->body .= $DSP->error_message($LANG->line('invalid_fortune_id'));		 
				return; 
			} 
			 
			$fortune_text = $query->row['fortune_text']; 
		} 
		 
		// ------------------------------------------------------- 
		//  HTML Title and Navigation Crumblinks 
		// ------------------------------------------------------- 
		 
		$DSP->title = $LANG->line('fortunes_module_name'); 
		$DSP->crumb = $DSP->anchor(BASE. 
								   AMP.'C=modules'. 
								   AMP.'M=fortunes', 
								   $LANG->line('fortunes_module_name'));		
									
		$DSP->crumb .= $DSP->crumb_item(($fortune_text != '') ? $LANG->line('update_fortune') : $LANG->line('add_fortune')); 
		 
		 
		// ------------------------------------------------------- 
		//  Page Heading and Success Message, if any 
		// ------------------------------------------------------- 
		 
		$r = $DSP->heading(($fortune_text != '') ? $LANG->line('update_fortune') : $LANG->line('add_fortune')); 
		 
		if ($msg != '') 
		{ 
			$r .= $DSP->qdiv('success', $msg).BR; 
		} 
		 
		// ------------------------------------------------------- 
		// Declare Form 
		// ------------------------------------------------------- 
		 
		$r .= $DSP->form('C=modules'.AMP.'M=fortunes'.AMP.'P=update', 'target'); 
		 
		// ------------------------------------------------------- 
		//  Modifying Existing Fortune, Hidden Form Field for ID 
		// ------------------------------------------------------- 
		 
		if ($fortune_text != '') 
		{ 
			$r .= $DSP->input_hidden('fortune_id', $IN->GBL('fortune_id')); 
		} 
		 
		// ------------------------------------------------------- 
		//  Table For Textarea 
		// ------------------------------------------------------- 
		 
		$r .= $DSP->table('tableBorder', '0', '0', '100%'). 
			  $DSP->tr(); 
			   
		$r .= $DSP->table_qcell('tableCellOne', $DSP->input_textarea('fortune_text', $fortune_text, 15, 'textarea', '100%')); 
			   
		$r .= $DSP->tr_c()	   
			 .$DSP->table_c();	   

		// ------------------------------------------------------- 
		//  Submit Button Text - Add/Update 
		// ------------------------------------------------------- 
		 
		if ($fortune_text != '') 
		{ 
			$r .= $DSP->qdiv('itemWrapper', BR.$DSP->input_submit($LANG->line('update_fortune')));	 
		} 
		else 
		{ 
			$r .= $DSP->qdiv('itemWrapper', BR.$DSP->input_submit($LANG->line('add_fortune')));   
		} 
		 
		// ------------------------------------------------------- 
		//  Close Form 
		// ------------------------------------------------------- 
		 
		   $r .= $DSP->form_c(); 

		$DSP->body .= $r;   
	} 
	// END 
	 
	 
	// ------------------------- 
	// Update/Create Fortune 
	// ------------------------- 
	 
	function update_fortune() 
	{ 
		global $LANG, $DB, $IN, $DSP; 
				
		// ------------------------------------------------------- 
		//  Valid Fortune Text Received? 
		// ------------------------------------------------------- 
		 
		$fortune_text = ( ! isset($_POST['fortune_text'])) ? '' : trim($_POST['fortune_text']); 
		 
		if ($fortune_text == '') 
		{ 
			$DSP->body .= $DSP->error_message($LANG->line('invalid_fortune_text'));		 
			return; 
		} 
		 
		// ------------------------------------------------------- 
		//  Insert or Update Depending on Fortune ID 
		// ------------------------------------------------------- 
		 
		if ( ! isset($_POST['fortune_id'])) 
		{ 
			$data = array('fortune_id'		=> '', 
						  'fortune_text'	=> trim($fortune_text)); 
			 
			$DB->query($DB->insert_string('exp_fortunes', $data)); 
			 
			// --------------------------------------------------- 
			//  Return to Form with Success Message 
			// --------------------------------------------------- 
			 
			return $this->modify_fortune($LANG->line('fortune_added')); 
		} 
		else 
		{ 
			$data = array('fortune_text'	=> trim($fortune_text)); 
			 
			$DB->query($DB->update_string('exp_fortunes', $data, "fortune_id ='".$_POST['fortune_id']."'"));	 
			 
			// --------------------------------------------------- 
			//  Return to View Fortunes with Success Message 
			// --------------------------------------------------- 
			 
			return $this->view_fortunes($LANG->line('fortune_updated')); 
		} 
		 
	} 
	// END 
	 
	 
	// ------------------------- 
	// Delete Fortune 
	// ------------------------- 
	 
	function delete_fortune() 
	{ 
		global $LANG, $DB, $IN, $DSP; 
		 
		// ------------------------------------------------------- 
		//  Fortune ID is required 
		// ------------------------------------------------------- 
		 
		if ( ! $IN->GBL('fortune_id')) 
		{ 
			$DSP->body .= $DSP->error_message($LANG->line('invalid_fortune_id'));		 
			return; 
		} 
		else 
		{ 
			$query = $DB->query("DELETE FROM exp_fortunes 
								 WHERE fortune_id = '".$IN->GBL('fortune_id')."'"); 
								 
			if ($DB->affected_rows == 0) 
			{ 
				$DSP->body .= $DSP->error_message($LANG->line('invalid_fortune_id'));		 
				return; 
			} 
		} 
		 
		// ------------------------------------------------------- 
		//  Return to View Fortunes with Success Message 
		// ------------------------------------------------------- 
		 
		return $this->view_fortunes($LANG->line('fortune_deleted'));		 
	} 
	// END 

	 
	 
	// ---------------------------------------- 
	//  Module installer 
	// ---------------------------------------- 

	function fortunes_module_install() 
	{ 
		global $DB;		 
		 
		$sql[] = "INSERT INTO exp_modules (module_id, 
										   module_name, 
										   module_version, 
										   has_cp_backend) 
										   VALUES 
										   ('', 
										   'Fortunes', 
										   '$this->version', 
										   'y')"; 
											
		$sql[] = "CREATE TABLE IF NOT EXISTS `exp_fortunes` ( 
				 `fortune_id` INT(6) UNSIGNED NOT NULL AUTO_INCREMENT, 
				 `fortune_text` TEXT NOT NULL , 
				 PRIMARY KEY (`fortune_id`));"; 
	 
		foreach ($sql as $query) 
		{ 
			$DB->query($query); 
		} 
		 
		return true; 
	} 
	// END 
	 
	 
	// ---------------------------------------- 
	//  Module de-installer 
	// ---------------------------------------- 

	function fortunes_module_deinstall() 
	{ 
		global $DB;	 

		$query = $DB->query("SELECT module_id 
							 FROM exp_modules 
							 WHERE module_name = 'Fortunes'"); 
				 
		$sql[] = "DELETE FROM exp_module_member_groups 
				  WHERE module_id = '".$query->row['module_id']."'";	   
				   
		$sql[] = "DELETE FROM exp_modules 
				  WHERE module_name = 'Fortunes'"; 
				   
		$sql[] = "DELETE FROM exp_actions 
				  WHERE class = 'Fortunes'"; 
				   
		$sql[] = "DELETE FROM exp_actions 
				  WHERE class = 'Fortunes_mcp'"; 
				   
		$sql[] = "DROP TABLE IF EXISTS exp_fortunes"; 

		foreach ($sql as $query) 
		{ 
			$DB->query($query); 
		} 

		return true; 
	} 
	// END 



} 
// END CLASS 
?>