<?php
if(isset($_POST['submit'])){
  $coursename = $_POST['review_course_name'];
  $medium = $_POST['review_medium'];
  $coursetype = $_POST['review_course_type'];
  $firstname = $_POST['review_firstname'];
  $lastname = $_POST['review_secondname'];
  $gender = $_POST['review_gender'];
  $email = $_POST['review_email'];
  $dob = $_POST['review_dob'];
  $phone = $_POST['review_phone'];
  $fathersname = $_POST['review_fathersname'];
  $mothersname = $_POST['review_mothersname'];
  $religion = $_POST['review_religion'];
  $category = $_POST['review_category'];
  $address = $_POST['review_address'];
  $nationality = $_POST['review_nationality'];
  $state = $_POST['review_state'];
  $city = $_POST['review_city'];
  $pincode = $_POST['review_pincode'];
  $class10 = $_POST['review_class_10'];
  $rollno10 = $_POST['review_rollno_10'];
  $percentage10 = $_POST['review_percentage_10'];
  $board10 = $_POST['review_board_10'];
  $school10 = $_POST['review_school_10'];
  $class12 = $_POST['review_class_12'];
  $rollno12 = $_POST['review_rollno_12'];
  $percentage12 = $_POST['review_percentage_12'];
  $board12 = $_POST['review_board_12'];
  $school12 = $_POST['review_school_12'];
  $classug = $_POST['review_class_ug'];
  $rollnoug = $_POST['review_rollno_ug'];
  $percentageug = $_POST['review_percentage_ug'];
  $boardug = $_POST['review_board_ug'];
  $schoolug = $_POST['review_school_ug'];
  $paymentmode = $_POST['payment_mode'];
  $transactionId = $_POST['transaction_id'];

  if(isset($_FILES['psp_image'])) {
    $psp_name = $_FILES['psp_image'] ['name'];
    $psp_type = $_FILES['psp_image'] ['type'];
    $psp_size = $_FILES['psp_image'] ['size'];
    $psp_tmp_name = $_FILES['psp_image'] ['tmp_name'];

    move_uploaded_file($psp_tmp_name, "user_data/$psp_name");
  }

  if(isset($_FILES['payment_receipt'])) {
    $payment_receipt_name = $_FILES['payment_receipt'] ['name'];
    $payment_receipt_type = $_FILES['payment_receipt'] ['type'];
    $payment_receipt_size = $_FILES['payment_receipt'] ['size'];
    $payment_receipt_tmp_name = $_FILES['payment_receipt'] ['tmp_name'];

    move_uploaded_file($payment_receipt_tmp_name, "user_data/$payment_receipt_name");
  }

  if(isset($_FILES['doc_10'])) {
    $doc_10_name = $_FILES['doc_10'] ['name'];
    $doc_10_type = $_FILES['doc_10'] ['type'];
    $doc_10_size = $_FILES['doc_10'] ['size'];
    $doc_10_tmp_name = $_FILES['doc_10'] ['tmp_name'];

    move_uploaded_file($doc_10_tmp_name, "user_data/$doc_10_name");
  }

  if(isset($_FILES['doc_12'])) {
    $doc_12_name = $_FILES['doc_12'] ['name'];
    $doc_12_type = $_FILES['doc_12'] ['type'];
    $doc_12_size = $_FILES['doc_12'] ['size'];
    $doc_12_tmp_name = $_FILES['doc_12'] ['tmp_name'];

    move_uploaded_file($doc_12_tmp_name, "user_data/$doc_12_name");
  }

  if(isset($_FILES['doc_UG'])) {
    $doc_UG_name = $_FILES['doc_UG'] ['name'];
    $doc_UG_type = $_FILES['doc_UG'] ['type'];
    $doc_UG_size = $_FILES['doc_UG'] ['size'];
    $doc_UG_tmp_name = $_FILES['doc_UG'] ['tmp_name'];

    move_uploaded_file($doc_UG_tmp_name, "user_data/$doc_UG_name");
  }

  if(isset($_FILES['doc_DM'])) {
    $doc_DM_name = $_FILES['doc_DM'] ['name'];
    $doc_DM_type = $_FILES['doc_DM'] ['type'];
    $doc_DM_size = $_FILES['doc_DM'] ['size'];
    $doc_DM_tmp_name = $_FILES['doc_DM'] ['tmp_name'];

    move_uploaded_file($doc_DM_tmp_name, "user_data/$doc_DM_name");
  }

  $heading="New Applicant for Admission in Course: ".$coursename."\nMedium: ".$medium."\nCourse Type: ".$coursetype;

  $basic="\n\n\nBASIC DETAILS :\n______________\n\nFirst Name: ".$firstname."\nLast Name: ".$lastname."\nGender: ".$gender."\nEmail: ".$email;

  $full="\n\n\nFULL DETAILS :\n_____________\n\nDate of Birth: ".$dob."\nMobile Number: ".$phone."\nFather's Name: ".$fathersname."\nMother's Name: ".$mothersname."\nReligion: ".$religion."\nCategory: ".$category."\nNationality: ".$nationality."\nState: ".$state."\nCity: ".$city."\nPincode: ".$pincode."\nAddress: ".$address;

  $qualification="\n\n\nQUALIFICATION DETAILS :\n______________________\n\nClass: 10th\nRoll Number: ".$rollno10."\nPercentage: ".$percentage10."\nBoard: ".$board10."\nSchool Name: ".$school10."\n\nClass: 12th\nRoll Number: ".$rollno12."\nPercentage: ".$percentage12."\nBoard: ".$board12."\nSchool Name: ".$school12;

  if(isset($classug)) {
    $qualificationug="\n\nUG Course: ".$classug."\nRoll Number: ".$rollnoug."\nPercentage: ".$percentageug."\nUniversity: ".$boardug."\nCollege Name: ".$schoolug;
    $documentsug="\n".$classug." Marksheet: ".$doc_UG_name;
  }
  else {
    $qualificationug= "\n";
    $documentsug="\n";
  }

  $documents="\n\n\nDOCUMENTS ATTACHED :\n___________________"."\n\nClass 10th Marksheet: ".$doc_10_name."\nClass 12th Marksheet: ".$doc_12_name;

  $documentsdm="\nDomicile Certificate: ".$doc_DM_name;

  $pspImage="\n\n\nAttached Candidate Photo: ".$psp_name;

  $paymentModeEmail="\n\n\nPAYMENT MODE: ".$paymentmode;

  if($paymentmode=="Online") {
    $transactions="\n\nTransaction ID: ".$transactionId."\nAttached Payment Receipt: ".$payment_receipt_name;
  }
  else {
    $transactions="\n";
  }


  $to='cccjbpnew@mtstudios.tech';
  $message=$heading.$basic.$full.$qualification.$qualificationug.$documents.$documentsug.$documentsdm.$pspImage.$paymentModeEmail.$transactions;
  $header="From: ".$email;

  $file = $psp_tmp_name;
  $content = chunk_split(base64_encode(file_get_contents($file)));
  $uid = md5(uniqid(time()));

  $fileTwo = $doc_10_tmp_name;
  $contentTwo = chunk_split(base64_encode(file_get_contents($fileTwo)));
  $uidTwo = md5(uniqid(time()));

  $fileThree = $doc_12_tmp_name;
  $contentThree = chunk_split(base64_encode(file_get_contents($fileThree)));
  $uidThree = md5(uniqid(time()));

  $fileFour = $doc_UG_tmp_name;
  $contentFour = chunk_split(base64_encode(file_get_contents($fileFour)));
  $uidFour = md5(uniqid(time()));

  $fileFive = $doc_DM_tmp_name;
  $contentFive = chunk_split(base64_encode(file_get_contents($fileFive)));
  $uidFive = md5(uniqid(time()));

  $fileSix = $payment_receipt_tmp_name;
  $contentSix = chunk_split(base64_encode(file_get_contents($fileSix)));
  $uidSix = md5(uniqid(time()));

  $header .= "Content-Type: multipart/mixed; boundary=\"".$uid."\"\r\n\r\n";
  $header .= "Content-Transfer-Encoding: base64\r\n";
  $header .= "Content-Disposition: attachment; filename=\"".$psp_name."\"\r\n\r\n";
  $header .= $content."\r\n\r\n";
  $header .= $contentTwo."\r\n\r\n";
  $header .= $contentThree."\r\n\r\n";
  $header .= $contentFour."\r\n\r\n";
  $header .= $contentFive."\r\n\r\n";
  $header .= $contentSix."\r\n\r\n";
  $header .= "Content-type:text/plain; charset=iso-8859-1\r\n";
  $header .= "Content-Transfer-Encoding: 7bit\r\n\r\n";


  if(mail($to, $subject, $message, $header)){
    echo "";
  }
  else{
    echo "Something went wrong!";
  }
 }
?>

<html>
 <head>
  <title>
    Admission Confirmation - College of Computer & Communication, Jabalpur
  </title>
  <style>
  #cscroll::-webkit-scrollbar {
  width: 9px;
}

#cscroll::-webkit-scrollbar-track {
  background-color: #e8e8e8;
  margin-bottom:38px;
  border-left:1px solid #c0c0c0;
}
 
#cscroll::-webkit-scrollbar-thumb {
  background-color: #18376C;
  border:1.5px solid #122A52;
  border-radius:50px;
}

#cscroll::-webkit-scrollbar-thumb:hover {
  background-color: #2A5AAC;
  border:1.5px solid #122A52; 
}
  </style>
  <link rel="stylesheet" href="fonts.css" media="print" onload="this.media='all'; this.onload=null;">
  <link rel="stylesheet" type="text/css" href="ui.css">
  <link rel="stylesheet" type="text/css" href="ui2.css">
  <style>
    body {
      font-family: myFont;
    }
  </style>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script type="text/javascript">
    ; (function () {
        function id(v) { return document.getElementById(v); }
        function loadbar() {
            var ovrl = id("overlay"),
        prog = id("progress"),
        stat = id("progstat"),
        img = document.images,
        c = 0;
            tot = img.length;

            function imgLoaded() {
                c += 1;
                var perc = ((100 / tot * c) << 0) + "%";
                prog.style.width = perc;
                
                if (c === tot) return doneLoading();
            }
            function doneLoading() {
                ovrl.style.opacity = 0;
                setTimeout(function () {
                    ovrl.style.display = "none";
                }, 1200);
            }
            for (var i = 0; i < tot; i++) {
                var tImg = new Image();
                tImg.onload = imgLoaded;
                tImg.onerror = imgLoaded;
                tImg.src = img[i].src;
            }
        }
        document.addEventListener('DOMContentLoaded', loadbar, false);
    } ());
  </script>
    <script>
      parent.document.Title = "Thank you for contacting us! - College of Computer & Communication, Jabalpur";
    </script>
    <script>
      function goBack() {
        window.history.back();
      }
    </script>
    <meta name="apple-mobile-web-app-status-bar" content="#ffffff" />
    <meta name="theme-color" content="#ffffff" />
 </head>
<body oncontextmenu="return false">

<div class="scroll_container">
  <div class="content_spacer2"></div>
 <center>

  <div class="resizer_container_full">

    <div class="admission_final">
     <div class="spacer">
      <center>
        <br>
        <div class="admission_confirmation">
          <div class="form_icon_large_container">
            <div class="form_icon_large"></div>
            <div class="form_icon_large_filler1"></div>
            <div class="form_icon_large_filler2"></div>
            <div class="form_icon_large_filler3"></div>
          </div>
          <div class="form_email_large_container">
            <img class="form_email_arrow" src="images/email_arrow_large.png">
          </div>
          <div class="form_email_large_container2">
            <img class="form_email_icon" src="images/email_icon_large.png">
            <div class="form_email_sent"></div>
            <div class="form_email_sent2">
              <div class="checkbox_check1big_container">
                <div class="checkbox_check1big"></div>
              </div>
              <div class="checkbox_check2big_container">
                <div class="checkbox_check2big"></div>
              </div>
            </div>
          </div>
        </div>
       <font style="font-size:38px;color:#27426E;line-height: 80px;">Admission done!</font>
       <div style="line-height: 20px;">Thank you for submitting Admission form.</div><br><br>
        We will get back to you shortly.<br><br><br><br>
       <button onclick="window.print()" class="print"><div class="print_icon"></div>Print Form</button>
      </center>
     </div>
    </div>
  
   </div>

 </center>

<section>

 <div class="end_credits">
  <div class="quick_links">
   <font style="font-size:20px;color:#27426E;">Quick Links</font>
   <br><br><a href="http://cccjbp.in/courses.php"><img src="images/arrow.png" style="vertical-align:top;">&nbsp&nbsp&nbspDirectorate of Institutional Finance</a>
   <br><a href="http://cccjbp.in/index.php"><img src="images/arrow.png" style="vertical-align:top;">&nbsp&nbsp&nbspRagging Instructions</a>
   <br><a href="http://cccjbp.in/index.php"><img src="images/arrow.png" style="vertical-align:top;">&nbsp&nbsp&nbspNational Holidays Calendar</a>
   <br><a href="http://cccjbp.in/index.php#"><img src="images/arrow.png" style="vertical-align:top;">&nbsp&nbsp&nbspDownload Alumni Form</a>
  </div>
  <div class="end_partition2">
   <div class="time_table">
    <font style="font-size:20px;color:#27426E;">Time Table</font>
    <br><br><a href="http://cccjbp.in/index.php#"><img src="images/arrow.png" style="vertical-align:top;">&nbsp&nbsp&nbspTime-Table Session June 2021</a>
    <br><a href="http://cccjbp.in/index.php#"><img src="images/arrow.png" style="vertical-align:top;">&nbsp&nbsp&nbspMain Examination Time-Table</a>
   </div><br><br>
   <div class="radio_ad">
    <font style="font-size:20px;color:#27426E;">CCC Radio Ad</font>
    <br><br>
    <audio style="width:290px;outline:transparent;" controls>
     <source src="assets/radio_ad.mp3" type="audio/mpeg">
    </audio>
   </div>
  </div>
  <div class="contact_us">
   <font style="font-size:20px;color:#27426E;">Contact Us</font>
   <br><br><b>Telephone:</b><br>0761-42187-95/96
   <br><br><b>Email:</b><br> info@cccjbp.in
   <br><br><b>Address:</b><br> College of Computers & Communication<br>1101, Near Shastri Bridge, Napier Town<br>Jabalpur, Madhya Pradesh - 482001
  </div>

  <center><div class="copyright_container">
    <div class="copyright"><div style="width:100%;">
   © Copyright 2021 Made by Mohit Nandgirikar & Dharmi Barman, BCA VI Sem
   <div class="cv_container">
   		<img src="images/account_icon.png">
    	<div id="CounterVisitor">
          <span class="counter-item">0</span>
          <span class="counter-item">0</span>
          <span class="counter-item">1</span>
          <span class="counter-item">1</span>
          <span class="counter-item">8</span>
          <span class="counter-item">4</span>
        </div>
        <div class="tooltip">This&nbspmuch&nbsppeople&nbspviewed&nbspCCC&nbspwebsite.</div>
        <script>
  	    	var n = localStorage.getItem('on_load_counter');

    		if (n === null) {
        		n = 0;
    		}

    		n++;

    		localStorage.setItem("on_load_counter", n);

    		document.getElementById('CounterVisitor').innerHTML = n;
  		</script>
	</div>


  </div></div>
 </div>
 </center>

 </div>

</div>


<div class="adm_form_print" id="adm_form_print">

  <div class="adm_form_print_container">

    <div class="adm_form_print_heading">
      <h2>COLLEGE OF COMPUTER AND COMMUNICATION</h2><br>
      Shastri Bridge, Napier Town, Jabalpur-482002<br>
      <h1>Online Admission Form</h1>
    </div>

    <div class="adm_photo_container" style="float:left;">
      <div class="adm_form_print_photo">
        <div id="adm_psp_img" class="adm_psp" style="background-color:#ffffff;">
          <img src="user_data/<?php echo $psp_name ?>" id="psp_review_output" style="pointer-events: none;">
        </div>
      </div>
    </div>

    <div class="adm_form_print_basic">

      <div class="adm_review_course" style="width:172px;">
        <input type="text" name="form_print_course_name" id="course_name" class="adm_review_course_text" style="border-color:#093c8d; color:000000;" value="<?php echo @$coursename; ?>" disabled>
        <label class="adm_form_print_label" style="top:-7px;z-index: 0;">Course</label>
      </div>

      <div class="adm_medium2" style="width:200px;">
        <input type="text" name="form_print_medium" id="review_medium" class="adm_medium_text_active" style="border-color:#093c8d; color:000000;" value="<?php echo @$medium; ?>" autocomplete="off" disabled required>
        <label class="adm_form_print_label" style="z-index: 8;">Medium<sup>*</sup></label>
      </div>  

      <div class="adm_course_type2" style="width:200px;">
        <input type="text" name="form_print_course_type" id="review_course_type" class="adm_course_type_text_active" style="border-color:#093c8d; color:000000;" value="<?php echo @$coursetype; ?>" autocomplete="off" disabled required>
        <label class="adm_form_print_label" style="z-index: 6;">Course Type<sup>*</sup></label>
      </div>

      <div class="adm_firstname2" style="width:296px;">
        <input type="text" name="form_print_firstname" id="review_firstname" class="adm_firstname_text_active" style="border-color:#093c8d; color:000000;" value="<?php echo @$firstname; ?>" disabled required>
        <label class="adm_form_print_label">First Name<sup>*</sup></label>
      </div>

      <div class="adm_secondname2" style="width:296px;">
        <input type="text" name="form_print_secondname" id="review_secondname" class="adm_secondname_text_active" style="border-color:#093c8d; color:000000;" value="<?php echo @$lastname; ?>" disabled required>
        <label class="adm_form_print_label">Last Name<sup>*</sup></label>
      </div>

      <div class="adm_gender2" style="width:212px;">
        <input type="text" name="form_print_gender" id="review_gender" class="adm_gender_text_active" style="border-color:#093c8d; color:000000;" autocomplete="off" value="<?php echo @$gender; ?>" disabled required>
        <label class="adm_form_print_label" style="z-index: 4;">Gender<sup>*</sup></label>
      </div>

      <div class="adm_email2" style="width:380px;">
        <input type="text" name="form_print_email" id="review_email" class="adm_email_text_active" style="border-color:#093c8d; color:000000;" value="<?php echo @$email; ?>" disabled required>
        <label class="adm_form_print_label">Email<sup>*</sup></label>
      </div>

    </div>

    <div class="adm_form_print_full">

      <div class="adm_dob" id="adm_dob" style="width:386px;">
        <input type="text" name="form_print_dob" id="review_dob" class="adm_dob_text_active" style="border-color:#093c8d; color:000000;" value="<?php echo @$dob; ?>" autocomplete="off" disabled required>
        <label class="adm_form_print_label" style="z-index: 10;">Date of Birth<sup>*</sup></label>
      </div>

      <div class="adm_phone" style="width:385px;">
        <input type="number" name="form_print_phone" id="review_phone" class="adm_phone_text_active" style="border-color:#093c8d; color:000000;" value="<?php echo @$phone; ?>" disabled required>
        <label class="adm_form_print_label">Mobile Number<sup>*</sup></label>
      </div>

      <div class="adm_fathersname" style="width:386px;">
        <input type="text" name="form_print_fathersname" id="review_fathersname" class="adm_fathersname_text_active" style="border-color:#093c8d; color:000000;" value="<?php echo @$fathersname; ?>" disabled required>
        <label class="adm_form_print_label">Father's Name<sup>*</sup></label>
      </div>

      <div class="adm_mothersname" style="width:385px;">
        <input type="text" name="form_print_mothersname" id="review_mothersname" class="adm_mothersname_text_active" style="border-color:#093c8d; color:000000;" value="<?php echo @$mothersname; ?>" disabled required>
        <label class="adm_form_print_label">Mother's Name<sup>*</sup></label>
      </div>

      <div class="adm_religion" style="width:386px;">
        <input type="text" name="form_print_religion" id="review_religion" class="adm_religion_text_active" style="border-color:#093c8d; color:000000;" autocomplete="off" value="<?php echo @$religion; ?>" disabled required>
        <label class="adm_form_print_label" style="z-index: 6;">Religion<sup>*</sup></label>
      </div>

      <div class="adm_category" style="width:385px;">
        <input type="text" name="form_print_category" id="review_category" class="adm_category_text_active" style="border-color:#093c8d; color:000000;" autocomplete="off" value="<?php echo @$category; ?>" disabled required>
        <label class="adm_form_print_label" style="z-index: 4;">Category<sup>*</sup></label>
      </div>

      <div class="adm_address" style="width:791px;">
        <textarea name="form_print_address" id="review_address" type="text" class="adm_address_text_active" style="border-color:#093c8d; color:000000;" disabled required><?php echo @$address; ?></textarea>
        <label class="adm_laddress adm_form_print_label">Address<sup>*</sup></label>
      </div>

      <div class="adm_nationality" style="width:386px;">
        <input type="text" name="form_print_nationality" id="review_nationality" class="adm_nationality_text_active" style="border-color:#093c8d; color:000000;" value="<?php echo @$nationality; ?>" autocomplete="off" disabled required>
        <label class="adm_form_print_label" style="z-index: 4;">Nationality<sup>*</sup></label>
      </div>

      <div class="adm_state" style="width:385px;">
        <input type="text" name="form_print_state" id="review_state" class="adm_state_text_active" style="border-color:#093c8d; color:000000;" autocomplete="off" value="<?php echo @$state; ?>" disabled required>
        <label class="adm_form_print_label">State / Union Territory<sup>*</sup></label>
      </div>

      <div class="adm_city" style="width:386px;">
        <input type="text" name="form_print_city" id="review_city" class="adm_city_text_active" style="border-color:#093c8d; color:000000;" autocomplete="off" value="<?php echo @$city; ?>" disabled required>
        <label class="adm_form_print_label" style="z-index: 2;">District/City<sup>*</sup></label>
      </div>

      <div class="adm_pincode" style="width:385px;">
        <input type="number" name="form_print_pincode" id="review_pincode" class="adm_pincode_text_active" style="border-color:#093c8d; color:000000;" value="<?php echo @$pincode; ?>" disabled required>
        <label class="adm_form_print_label" style="z-index: 0;">Pincode<sup>*</sup></label>
      </div>


      <div class="adm_line2_separator">
        <div class="adm_line_s_heading">QUALIFICATION DETAILS</div>
      </div>

      <div class="adm_class">
        <input type="text" name="form_print_class_10" id="review_class_10" class="adm_class_text" style="border-color:#093c8d; color:000000;" value="10th" disabled>
        <label class="adm_form_print_label" style="top:-7px;z-index: 0;">Class</label>
      </div>

      <div class="adm_rollno_container">
        <div class="adm_rollno" style="width:313px;">
            <input type="text" name="form_print_rollno_10" id="review_rollno_10" class="adm_rollno_text_active" style="border-color:#093c8d; color:000000;" value="<?php echo @$rollno10; ?>" disabled required>
            <label class="adm_form_print_label">Roll number<sup>*</sup></label>
        </div>
      </div>

      <div class="adm_percentage" style="width:313px;">
          <input type="number" name="form_print_percentage_10" id="review_percentage_10" class="adm_percentage_text_active" style="border-color:#093c8d; color:000000;" value="<?php echo @$percentage10; ?>" disabled required>
          <label class="adm_form_print_label">Percentage<sup>*</sup></label>
      </div>

      <div class="adm_board" style="width:386px;">
          <input type="text" name="form_print_board_10" id="review_board_10" class="adm_board_text_active" style="border-color:#093c8d; color:000000;" value="<?php echo @$board10; ?>" disabled required>
          <label class="adm_form_print_label">Board<sup>*</sup></label>
      </div>

      <div class="adm_school" style="width:385px;">
        <input type="text" name="form_print_school_10" id="review_school_10" class="adm_school_text_active" style="border-color:#093c8d; color:000000;" value="<?php echo @$school10; ?>" disabled required>
        <label class="adm_form_print_label">School Name<sup>*</sup></label>
      </div>

      <div class="adm_line_separator" style="border-top:2px solid #c0c0c0; margin-top:5px; margin-bottom: 30px;"></div>
      <div class="adm_class">
        <input type="text" name="form_print_class_12" id="review_class_12" class="adm_class_text" style="border-color:#093c8d; color:000000;" value="12th" disabled>
        <label class="adm_form_print_label" style="top:-7px;">Class</label>
      </div>

      <div class="adm_rollno_container">
        <div class="adm_rollno" style="width:313px;">
            <input type="text" name="form_print_rollno_12" id="review_rollno_12" class="adm_rollno_text_active" style="border-color:#093c8d; color:000000;" value="<?php echo @$rollno12; ?>" disabled required>
            <label class="adm_form_print_label">Roll number<sup>*</sup></label>
        </div>
      </div>

      <div class="adm_percentage" style="width:313px;">
          <input type="number" name="form_print_percentage_12" id="review_percentage_12" class="adm_percentage_text_active" style="border-color:#093c8d; color:000000;" value="<?php echo @$percentage12; ?>" disabled required>
          <label class="adm_form_print_label">Percentage<sup>*</sup></label>
      </div>

      <div class="adm_board" style="width:386px;">
          <input type="text" name="form_print_board_12" id="review_board_12" class="adm_board_text_active" style="border-color:#093c8d; color:000000;" value="<?php echo @$board12; ?>" disabled required>
          <label class="adm_form_print_label">Board<sup>*</sup></label>
      </div>

      <div class="adm_school" style="width:385px;">
        <input type="text" name="form_print_school_12" id="review_school_12" class="adm_school_text_active" style="border-color:#093c8d; color:000000;" value="<?php echo @$school12; ?>" disabled required>
        <label class="adm_form_print_label">School Name<sup>*</sup></label>
      </div>

      <div class="adm_review_ug_fields" id="adm_review_ug_fields2">

        <div class="adm_line_separator" style="border-top:2px solid #c0c0c0; margin-top:5px; margin-bottom: 30px;"></div>

        <div class="adm_class" style="left:0px;">
          <input type="text" name="form_print_class_ug" id="print_class_ug" class="adm_class_text" style="border-color:#093c8d; color:000000;" value="<?php echo @$classug; ?>" disabled>
          <label class="adm_form_print_label" style="top:-7px;">UG Course</label>
        </div>

        <div class="adm_rollno_container">
          <div class="adm_rollno" style="width:313px;">
              <input type="text" name="form_print_rollno_ug" id="review_rollno_ug" class="adm_rollno_text_active" style="border-color:#093c8d; color:000000;" value="<?php echo @$rollnoug; ?>" disabled required>
              <label class="adm_form_print_label">Roll number<sup>*</sup></label>
          </div>
        </div>

        <div class="adm_percentage" style="width:313px;">
            <input type="number" name="form_print_percentage_ug" id="review_percentage_ug" class="adm_percentage_text_active" style="border-color:#093c8d; color:000000;" value="<?php echo @$percentageug; ?>" disabled required>
            <label class="adm_form_print_label">Percentage<sup>*</sup></label>
        </div>

        <div class="adm_board" style="width:386px;">
            <input type="text" name="form_print_board_ug" id="review_board_ug" class="adm_board_text_active" style="border-color:#093c8d; color:000000;" value="<?php echo @$boardug; ?>" disabled required>
            <label class="adm_form_print_label">University<sup>*</sup></label>
        </div>

        <div class="adm_school" style="width:385px;">
          <input type="text" name="form_print_school_ug" id="review_school_ug" class="adm_school_text_active" style="border-color:#093c8d; color:000000;" value="<?php echo @$schoolug; ?>" disabled required>
          <label class="adm_form_print_label">College Name<sup>*</sup></label>
        </div>

      </div>


      <div class="adm_line2_separator">
        <div class="adm_line_s_heading">ATTACHED DOCUMENTS</div>
      </div>

      <div class="adm_universal" style="margin-right:20px;">
        <input type="text" name="print_doc_10" id="print_doc_10" class="adm_universal_text_active" style="border-color:#093c8d; color:000000;" value="<?php echo @$doc_10_name; ?>" disabled required>
        <label class="adm_form_print_label">Class 10<sup>th</sup></label>
      </div>

      <div class="adm_universal">
        <input type="text" name="print_doc_12" id="print_doc_12" class="adm_universal_text_active" style="border-color:#093c8d; color:000000;" value="<?php echo @$doc_12_name; ?>" disabled required>
        <label class="adm_form_print_label">Class 12<sup>th</sup></label>
      </div>

      <div class="adm_universal" style="margin-right:20px;" id="print_doc_UG_cont">
        <input type="text" name="print_doc_UG" id="print_doc_UG" class="adm_universal_text_active" style="border-color:#093c8d; color:000000;" value="<?php echo @$doc_UG_name; ?>" disabled required>
        <label class="adm_form_print_label">UG Course<sup>&nbsp</sup></label>
      </div>

      <div class="adm_universal">
        <input type="text" name="print_doc_DM" id="print_doc_DM" class="adm_universal_text_active" style="border-color:#093c8d; color:000000;" value="<?php echo @$doc_DM_name; ?>" disabled required>
        <label class="adm_form_print_label">Domicile Certificate<sup>&nbsp</sup></label>
      </div>


      <div class="adm_form_print_payment_mode" id="paymentmode_div">Payment Mode : <?php echo $paymentmode; ?></div>

      <div id="print_payment_online" style="display: none;">

        <div class="adm_universal" style="margin-right:20px;">
          <input type="text" name="print_transaction_id" id="print_transaction_id" class="adm_universal_text_active" style="border-color:#093c8d; color:000000;" value="<?php echo @$transactionId; ?>" disabled required>
          <label class="adm_form_print_label">Transaction ID<sup>&nbsp</sup></label>
        </div>

        <div class="adm_universal">
          <input type="text" name="print_transaction_receipt" id="print_transaction_receipt" class="adm_universal_text_active" style="border-color:#093c8d; color:000000;" value="<?php echo @$payment_receipt_name; ?>" disabled required>
          <label class="adm_form_print_label">Attached Receipt<sup>&nbsp</sup></label>
        </div>

      </div>

      <div id="print_payment_offline" style="padding:0px 35px;font-size:17px;text-align:center;">
        *Note - Please pay sum of Rs.200/- in the Accounts Department<br>at College of Computer & Communication premises<br>within 7 days from the date of submission of this Form.
      </div>

      <script>
        window.onload = function() {
          if(document.getElementById('print_class_ug').value === "") {
            document.getElementById('adm_review_ug_fields2').classList.add('hidden');
            document.getElementById('print_doc_UG_cont').classList.add('hidden');
          }
          else {
            document.getElementById('adm_review_ug_fields2').classList.remove('hidden');
            document.getElementById('print_doc_UG_cont').classList.remove('hidden');
          }
          
          if(document.getElementById('paymentmode_div').innerHTML === "Payment Mode : Online") {
            document.getElementById('print_payment_online').style.display = "block";
            document.getElementById('print_payment_offline').style.display = "none";
          }
          else if(document.getElementById('paymentmode_div').innerHTML === "Payment Mode : Offline") {
            document.getElementById('print_payment_online').style.display = "none";
            document.getElementById('print_payment_offline').style.display = "block";
          }
        }
      </script>

    </div>

  </div>

</div>


</section>


<div id="button_bar">

   <center>
    <div class="button_bar_d">

     <a href="home.htm"><button class="button1">Home</button></a>
     <a href="about_us.htm"><button class="button2">About Us</button></a>
     <div class="courses_link">
      <a href="courses.htm"><button class="button3">Courses</button></a>
      <div class="courses_bar">
       <div class="courses_list1">
        <a href="cs.htm"><div class="courses_l1"><div style="width:190px;border:0px solid blue;">BCA / M.Sc / PGDCA / DCA</div></div></a>
       </div>
       <div class="courses_list2">
        <a href="science.htm"><div class="courses_l2"><div style="width:32px;border:0px solid blue;">B.Sc</div></div></a>
       </div>
       <div class="courses_list3">
        <a href="management.htm"><div class="courses_l3"><div style="width:32px;border:0px solid blue;">BBA</div></div></a>
       </div>
      </div>
     </div>
     <a href="facilities.htm"><button class="button4">Facilities</button></a>
     <a href="achievements.htm"><button class="button6">Achievements</button></a>
     <div class="gallery_link">
      <a href="gallery.htm"><button class="button7">Gallery</button></a>
      <div class="gallery_bar">
       <div class="gallery_list1">
        <a href="gallery.htm"><div class="gallery_l1"><div style="width:101px;border:0px solid blue;">Photo Gallery</div></div></a>
       </div>
       <div class="gallery_list2">
        <a href="videogallery.htm"><div class="gallery_l2"><div style="width:101px;border:0px solid blue;">Video Gallery</div></div></a>
       </div>
      </div>
     </div>
     <a href="notice.htm"><button class="button8">Notice</button></a>
     <a href="contact_us.htm"><button class="button9">Contact Us</button></a>
     </div>
   </center>

   <div class="menu_close"><img src="images/close_icon.png"></div>

   <div class="button_bar_m">
    <button id="menu" class="button_m_main">
      <img src="images/menu_icon.png">

      <div class="sidebar_bg_container">
        <div class="sidebar_bg"></div>

        <div class="sidebar">
        
          <div class="buttonm_spacer"><a href="#"><div class="buttonm1s">Home</div></a></div>
          <div class="buttonm_spacer"><a href="about_us.htm"><div class="buttonm2">About&nbspUs</div></a></div>
          <div class="buttonm_spacer"><div class="buttonm3"><div class="buttonm3_text">Courses<img src="images/drop_down_arrow.png"></div>
            <div class="courses_m_expand">
              <a href="courses.htm"><div class="buttonm3p">Courses<img src="images/link_icon.png"></div></a>
              <a href="cs.htm"><div class="courses_ml1">BCA&nbsp/&nbspM.Sc&nbsp/&nbspPGDCA&nbsp/&nbspDCA</div></a>
              <a href="science.htm"><div class="courses_ml2">B.Sc</div></a>
              <a href="management.htm"><div class="courses_ml3">BBA</div></a>
            </div>
          </div></div>
          <div class="buttonm_spacer"><a href="facilities.htm"><div class="buttonm4">Facilities</div></a></div>
          <div class="buttonm_spacer"><a href="achievements.htm"><div class="buttonm5">Achievements</div></a></div>
          <div class="buttonm_spacer"><a href="gallery.htm"><div class="buttonm6">Gallery</div></a></div>
          <div class="buttonm_spacer"><a href="notice.htm"><div class="buttonm7">Notice</div></a></div>
          <div class="buttonm_spacer"><a href="contact_us.htm"><div class="buttonm8">Contact&nbspUs</div></a></div>

        </div>
      </div>

    </button>
   </div>

  </div>




 <div id="overlay">
  <center>
   <div class="loader"></div>
   <div class="splash_spacer" style="top:429px;"><div class="loading"><div id="progress"></div></div></div>
  </center>
 </div>

 </body>
</html>