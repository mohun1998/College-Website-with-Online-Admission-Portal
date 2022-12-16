var CourseGlobal = "";
var FirstName, LastName, Gender, Email, DOB, Phone, FathersName, MothersName, Medium, CourseType, Religion, Category, Address, Nationality, State, City, Pincode, Rollno10, Percentage10, Board10, School10, Rollno12, Percentage12, Board12, School12, ClassUG, RollnoUG, PercentageUG, BoardUG, SchoolUG;
var FirstName2, LastName2, Gender2, Email2, DOB2, Phone2, FathersName2, MothersName2, Medium2, CourseType2, Religion2, Category2, Address2, Nationality2, State2, City2, Pincode2, Rollno102, Percentage102, Board102, School102, Rollno122, Percentage122, Board122, School122, ClassUG2, RollnoUG2, PercentageUG2, BoardUG2, SchoolUG2;

const StepTrack = document.getElementById('adm_progress_track');
const StepProgress = document.getElementById('adm_progress_bar');
const Step1 = document.getElementsByClassName('adm_step1');
const Step2 = document.getElementsByClassName('adm_step2');
const Step3 = document.getElementsByClassName('adm_step3');
const Step4 = document.getElementsByClassName('adm_step4');
const Step2Heading = document.getElementById('adm_step2_heading');
const CourseName = document.getElementById('course_name');


const FirstNameBox = document.getElementById('firstname');
const LastNameBox = document.getElementById('secondname');
const EmailBox = document.getElementById('email');
const PhoneBox = document.getElementById('phone');
const FathersNameBox = document.getElementById('fathersname');
const MothersNameBox = document.getElementById('mothersname');
const AddressBox = document.getElementById('address');
const PincodeBox = document.getElementById('pincode');
const Rollno10Box = document.getElementById('rollno_10');
const Percentage10Box = document.getElementById('percentage_10');
const Board10Box = document.getElementById('board_10');
const School10Box = document.getElementById('school_10');
const Rollno12Box = document.getElementById('rollno_12');
const Percentage12Box = document.getElementById('percentage_12');
const Board12Box = document.getElementById('board_12');
const School12Box = document.getElementById('school_12');
const ClassUGBox = document.getElementById('class_ug');
const RollnoUGBox = document.getElementById('rollno_ug');
const PercentageUGBox = document.getElementById('percentage_ug');
const BoardUGBox = document.getElementById('board_ug');
const SchoolUGBox = document.getElementById('school_ug');


const FirstNameReviewBox = document.getElementById('review_firstname');
const LastNameReviewBox = document.getElementById('review_secondname');
const EmailReviewBox = document.getElementById('review_email');
const PhoneReviewBox = document.getElementById('review_phone');
const FathersNameReviewBox = document.getElementById('review_fathersname');
const MothersNameReviewBox = document.getElementById('review_mothersname');
const AddressReviewBox = document.getElementById('review_address');
const PincodeReviewBox = document.getElementById('review_pincode');
const Rollno10ReviewBox = document.getElementById('review_rollno_10');
const Percentage10ReviewBox = document.getElementById('review_percentage_10');
const Board10ReviewBox = document.getElementById('review_board_10');
const School10ReviewBox = document.getElementById('review_school_10');
const Rollno12ReviewBox = document.getElementById('review_rollno_12');
const Percentage12ReviewBox = document.getElementById('review_percentage_12');
const Board12ReviewBox = document.getElementById('review_board_12');
const School12ReviewBox = document.getElementById('review_school_12');
const ClassUGReviewBox = document.getElementById('review_class_ug');
const RollnoUGReviewBox = document.getElementById('review_rollno_ug');
const PercentageUGReviewBox = document.getElementById('review_percentage_ug');
const BoardUGReviewBox = document.getElementById('review_board_ug');
const SchoolUGReviewBox = document.getElementById('review_school_ug');
const TransactionID = document.getElementById('transaction_id');

const UGReviewDesc = document.getElementById('adm_review_ug_desc');
const UGHeading = document.getElementById('adm_ud_ug_heading');
const UGFields = document.getElementById('adm_ug_fields');
const UGReviewFields = document.getElementById('adm_review_ug_fields');
const UGUDCard = document.getElementById('adm_ud_ug_card');
const UGReviewBox = document.getElementById('doc_ug_box');

const GenderOptions = document.getElementById('gender_options');
const GenderOption = document.getElementById('gender_option_container');
const GenderBox = document.getElementById('gender');
const GenderReviewBox = document.getElementById('review_gender');


const DOBOptions = document.getElementById('dob_options');
const DOBOption = document.getElementById('dob_option_container');
const DOBBox = document.getElementById('dob');
const DOBReviewBox = document.getElementById('review_dob');
const currentYear = (new Date()).getFullYear();
var date = 00;
var month = "";


const MediumOptions = document.getElementById('medium_options');
const MediumOption = document.getElementById('medium_option_container');
const MediumBox = document.getElementById('medium');
const MediumReviewBox = document.getElementById('review_medium');


const CourseTypeOptions = document.getElementById('course_type_options');
const CourseTypeOption = document.getElementById('course_type_option_container');
const CourseTypeBox = document.getElementById('course_type');
const CourseTypeReviewBox = document.getElementById('review_course_type');


const ReligionOptions = document.getElementById('religion_options');
const ReligionOption = document.getElementById('religion_option_container');
const ReligionBox = document.getElementById('religion');
const ReligionReviewBox = document.getElementById('review_religion');


const CategoryOptions = document.getElementById('category_options');
const CategoryOption = document.getElementById('category_option_container');
const CategoryBox = document.getElementById('category');
const CategoryReviewBox = document.getElementById('review_category');


const NationalityOptions = document.getElementById('nationality_options');
const NationalityOption = document.getElementById('nationality_option_container');
const NationalityBox = document.getElementById('nationality');
const NationalityReviewBox = document.getElementById('review_nationality');


const StateOptions = document.getElementById('state_options');
const StateOption = document.getElementById('state_option_container');
const StateBox = document.getElementById('state');
const StateReviewBox = document.getElementById('review_state');


const CityOptions = document.getElementById('city_options');
const CityOption = document.getElementById('city_option_container');
const CityBox = document.getElementById('city');
const CityReviewBox = document.getElementById('review_city');


const CheckBox = document.getElementById('adm_checkbox');
const CheckBoxCheck1 = document.getElementById('adm_checkbox_check1');
const CheckBoxCheck2 = document.getElementById('adm_checkbox_check2');
const CheckBoxOG = document.getElementById('declaration');

const CheckBox2 = document.getElementById('adm_checkbox2');
const CheckBoxCheck12 = document.getElementById('adm_checkbox_check12');
const CheckBoxCheck22 = document.getElementById('adm_checkbox_check22');
const CheckBoxOG2 = document.getElementById('declaration2');

const CheckBox3 = document.getElementById('adm_checkbox3');
const CheckBoxCheck13 = document.getElementById('adm_checkbox_check13');
const CheckBoxCheck23 = document.getElementById('adm_checkbox_check23');
const CheckBoxOG3 = document.getElementById('declaration3');

const RadioButton1 = document.getElementById('adm_radio_button');
const RadioButton2 = document.getElementById('adm_radio_button2');
const RadioFiller1 = document.getElementById('adm_radio_filler');
const RadioFiller2 = document.getElementById('adm_radio_filler2');
const RadioButtonOG1 = document.getElementById('payment_online');
const RadioButtonOG2 = document.getElementById('payment_offline');
const PaymentMode1 = document.getElementById('payment_mode_1');
const PaymentMode2 = document.getElementById('payment_mode_2');


const UploadBtn = document.getElementById('psp_upload');
const UploadBtnOG = document.getElementById('file');
const PSP = document.getElementById('adm_psp_img');
const UploadHide = document.getElementById('adm_psp_upload');
const ChangeShow = document.getElementById('adm_psp_change');
const UploadDoc10OG = document.getElementById('doc_10');
const UploadDoc12OG = document.getElementById('doc_12');
const UploadDocUGOG = document.getElementById('doc_UG');
const UploadDocDMOG = document.getElementById('doc_DM');

$('#adm_bca').on('click', function () {
    CourseGlobal = "BCA";
    Step1to2MoverOG();
    $('#adm_ug_fields').addClass('hidden');
    $('#adm_review_ug_fields').addClass('hidden');
    $('#adm_ud_ug_card').addClass('hidden');
    $('#doc_ug_box').addClass('hidden');
});

$('#adm_msc').on('click', function () {
    CourseGlobal = "M.Sc (CS)";
    Step1to2MoverOG();
    $('#adm_ug_fields').removeClass('hidden');
    $('#adm_review_ug_fields').removeClass('hidden');
    $('#adm_ud_ug_card').removeClass('hidden');
    $('#doc_ug_box').removeClass('hidden');
});

$('#adm_dca').on('click', function () {
    CourseGlobal = "DCA";
    Step1to2MoverOG();
    $('#adm_ug_fields').addClass('hidden');
    $('#adm_review_ug_fields').addClass('hidden');
    $('#adm_ud_ug_card').addClass('hidden');
    $('#doc_ug_box').addClass('hidden');
});

$('#adm_pgdca').on('click', function () {
    CourseGlobal = "PGDCA";
    Step1to2MoverOG();
    $('#adm_ug_fields').removeClass('hidden');
    $('#adm_review_ug_fields').removeClass('hidden');
    $('#adm_ud_ug_card').removeClass('hidden');
    $('#doc_ug_box').removeClass('hidden');
});

$('#adm_bba1').on('click', function () {
    CourseGlobal = "BBA (APR)";
    Step1to2MoverOG();
    $('#adm_ug_fields').addClass('hidden');
    $('#adm_review_ug_fields').addClass('hidden');
    $('#adm_ud_ug_card').addClass('hidden');
    $('#doc_ug_box').addClass('hidden');
});

$('#adm_bba2').on('click', function () {
    CourseGlobal = "BBA (MC)";
    Step1to2MoverOG();
    $('#adm_ug_fields').addClass('hidden');
    $('#adm_review_ug_fields').addClass('hidden');
    $('#adm_ud_ug_card').addClass('hidden');
    $('#doc_ug_box').addClass('hidden');
});

$('#adm_bsc').on('click', function () {
    CourseGlobal = "B.Sc (EM)";
    Step1to2MoverOG();
    $('#adm_ug_fields').addClass('hidden');
    $('#adm_review_ug_fields').addClass('hidden');
    $('#adm_ud_ug_card').addClass('hidden');
    $('#doc_ug_box').addClass('hidden');
});

function Step1to2MoverOG() {
    $('#adm_step1').addClass('adm_step_mover');
    $('#adm_step2').addClass('adm_step_mover_in').removeClass('hidden');
    Step2Heading.innerHTML= CourseGlobal + "&nbspAdmission Form";
    CourseName.value = CourseGlobal;
    setTimeout(function () {
        $('#adm_step1').addClass('hidden');
        document.getElementById('step_2_label').classList.replace('adm_pblabel', 'adm_pblabel_active');
        document.getElementById('step_2_icon').src = "images/adm_form_icon_active.png";
        StepTrack.classList.remove('adm_step_progress_bar_track');
        StepTrack.classList.remove('adm_step_progress_bar_track1');
        StepTrack.classList.add('adm_step_progress_bar_track2');
        StepProgress.classList.remove('adm_pb1_filler');
        StepProgress.classList.remove('adm_pb2_filler_rev');
        StepProgress.classList.add('adm_pb2_filler');
        newPageTitle = 'Admission Form (2/4) - Online Admission - College of Computer & Communication, Jabalpur';
        document.title = newPageTitle;
    }, 850);
    setTimeout(function () {
        $('#adm_step2').removeClass('adm_step2').removeClass('adm_step_mover_in').addClass('adm_step2_after');
    }, 1000);
    document.getElementById('scrollContainer').scrollTo({top: 0, behavior: 'smooth'});
}

function Step2to3Mover() {
    if(CheckBoxOG.checked === true) {
        $('#adm_step2').addClass('adm_step_mover');
        $('#adm_step3').addClass('adm_step_mover_in').removeClass('hidden');
        setTimeout(function () {
            $('#adm_step2').addClass('hidden');
            document.getElementById('step_3_label').classList.replace('adm_pblabel', 'adm_pblabel_active');
            document.getElementById('step_3_icon').src = "images/adm_upload_icon_active.png";
            StepTrack.classList.remove('adm_step_progress_bar_track2');
            StepTrack.classList.add('adm_step_progress_bar_track3');
            StepProgress.classList.remove('adm_pb2_filler');
            StepProgress.classList.remove('adm_pb3_filler_rev');
            StepProgress.classList.add('adm_pb3_filler');
            newPageTitle = 'Upload Documents (3/4) - Online Admission - College of Computer & Communication, Jabalpur';
            document.title = newPageTitle;
        }, 850);
        setTimeout(function () {
            $('#adm_step3').removeClass('adm_step3').removeClass('adm_step_mover_in').addClass('adm_step3_after');
        }, 1000);
        document.getElementById('scrollContainer').scrollTo({top: 0, behavior: 'smooth'});
        FirstName2.value = FirstName.value;
        LastName2.value = LastName.value;
        Gender2.value = Gender.value;
        Email2.value = Email.value;
        DOB2.value = DOB.value;
        Phone2.value = Phone.value;
        FathersName2.value = FathersName.value;
        MothersName2.value = MothersName.value;
        Medium2.value = Medium.value;
        CourseType2.value = CourseType.value;
        Religion2.value = Religion.value;
        Category2.value = Category.value;
        Address2.value = Address.value;
        Nationality2.value = Nationality.value;
        State2.value = State.value;
        City2.value = City.value;
        Pincode2.value = Pincode.value;
        Rollno102.value = Rollno10.value;
        Percentage102.value = Percentage10.value;
        Board102.value = Board10.value;
        School102.value = School10.value;
        Rollno122.value = Rollno12.value;
        Percentage122.value = Percentage12.value;
        Board122.value = Board12.value;
        School122.value = School12.value;
        ClassUG2.value = ClassUG.value;
        RollnoUG2.value = RollnoUG.value;
        PercentageUG2.value = PercentageUG.value;
        BoardUG2.value = BoardUG.value;
        SchoolUG2.value = SchoolUG.value;
        UGReviewDesc.innerHTML = ClassUG.value + "&nbspMarksheet";
        UGHeading.innerHTML = ClassUG.value + "&nbspMarksheet";
    }
    else {
        alert('Please check the Declaration.');
    }
}

function Step3to4Mover() {
    if(CheckBoxOG.checked === true && CheckBoxOG2.checked === true) {
        $('#adm_step3').addClass('adm_step_mover');
        $('#adm_step4').addClass('adm_step_mover_in').removeClass('hidden');
        setTimeout(function () {
            $('#adm_step3').addClass('hidden');
            document.getElementById('step_4_label').classList.replace('adm_pblabel', 'adm_pblabel_active');
            document.getElementById('step_4_icon').src = "images/adm_declare_icon_active.png";
            StepTrack.classList.remove('adm_step_progress_bar_track3');
            StepTrack.classList.add('adm_step_progress_bar_track4');
            StepProgress.classList.remove('adm_pb3_filler');
            StepProgress.classList.remove('adm_pb4_filler_rev');
            StepProgress.classList.add('adm_pb4_filler');
            newPageTitle = 'Review & Payment (4/4) - Online Admission - College of Computer & Communication, Jabalpur';
            document.title = newPageTitle;
        }, 850);
        setTimeout(function () {
            $('#adm_step4').removeClass('adm_step4').removeClass('adm_step_mover_in').addClass('adm_step4_after');
        }, 1000);
        document.getElementById('scrollContainer').scrollTo({top: 0, behavior: 'smooth'});
    }
    else {
        alert('Please check the Declaration.');
    }
}


function Step2to1Mover() {
    $('#adm_step2').addClass('adm_step_reverse');
    $('#adm_step1').removeClass('adm_step1').addClass('adm_step1_before').addClass('adm_step_reverse_in').removeClass('hidden').removeClass('adm_step_mover');
    setTimeout(function () {
        document.getElementById('step_2_label').classList.replace('adm_pblabel_active', 'adm_pblabel');
        document.getElementById('step_2_icon').src = "images/adm_form_icon.png";
        StepTrack.classList.remove('adm_step_progress_bar_track2');
        StepTrack.classList.add('adm_step_progress_bar_track1');
        StepProgress.classList.remove('adm_pb2_filler');
        StepProgress.classList.remove('adm_pb3_filler_rev');
        StepProgress.classList.add('adm_pb2_filler_rev');
        newPageTitle = 'Select Course (1/4) - Online Admission - College of Computer & Communication, Jabalpur';
        document.title = newPageTitle;
    }, 1200);
    setTimeout(function () {
        $('#adm_step1').removeClass('adm_step_reverse_in').removeClass('adm_step1_before').addClass('adm_step1');
        $('#adm_step2').removeClass('adm_step_reverse').removeClass('adm_step2_after').addClass('adm_step2').addClass('hidden');
    }, 1200);
    document.getElementById('scrollContainer').scrollTo({top: 0, behavior: 'smooth'});
}

function Step3to2Mover() {
    $('#adm_step3').addClass('adm_step_reverse');
    $('#adm_step2').removeClass('adm_step2').removeClass('adm_step2_after').addClass('adm_step2_before').addClass('adm_step_reverse_in').removeClass('hidden').removeClass('adm_step_mover');
    setTimeout(function () {
        document.getElementById('step_3_label').classList.replace('adm_pblabel_active', 'adm_pblabel');
        document.getElementById('step_3_icon').src = "images/adm_upload_icon.png";
        StepTrack.classList.remove('adm_step_progress_bar_track3');
        StepTrack.classList.add('adm_step_progress_bar_track2');
        StepProgress.classList.remove('adm_pb3_filler');
        StepProgress.classList.remove('adm_pb4_filler_rev');
        StepProgress.classList.add('adm_pb3_filler_rev');
        newPageTitle = 'Admission Form (2/4) - Online Admission - College of Computer & Communication, Jabalpur';
        document.title = newPageTitle;
    }, 1200);
    setTimeout(function () {
        $('#adm_step2').removeClass('adm_step_reverse_in').removeClass('adm_step2_before').addClass('adm_step2_after');
        $('#adm_step3').removeClass('adm_step_reverse').removeClass('adm_step3_after').addClass('adm_step3').addClass('hidden');
    }, 1200);
    document.getElementById('scrollContainer').scrollTo({top: 0, behavior: 'smooth'});
}

function Step4to3Mover() {
    $('#adm_step4').addClass('adm_step_reverse');
    $('#adm_step3').removeClass('adm_step3').removeClass('adm_step3_after').addClass('adm_step3_before').addClass('adm_step_reverse_in').removeClass('hidden').removeClass('adm_step_mover');
    setTimeout(function () {
        document.getElementById('step_4_label').classList.replace('adm_pblabel_active', 'adm_pblabel');
        document.getElementById('step_4_icon').src = "images/adm_declare_icon.png";
        StepTrack.classList.remove('adm_step_progress_bar_track4');
        StepTrack.classList.add('adm_step_progress_bar_track3');
        StepProgress.classList.remove('adm_pb4_filler');
        StepProgress.classList.add('adm_pb4_filler_rev');
        newPageTitle = 'Upload Documents (3/4) - Online Admission - College of Computer & Communication, Jabalpur';
        document.title = newPageTitle;
    }, 1200);
    setTimeout(function () {
        $('#adm_step3').removeClass('adm_step_reverse_in').removeClass('adm_step3_before').addClass('adm_step3_after');
        $('#adm_step4').removeClass('adm_step_reverse').removeClass('adm_step4_after').addClass('adm_step4').addClass('hidden');
    }, 1200);
    document.getElementById('scrollContainer').scrollTo({top: 0, behavior: 'smooth'});
}


function FinalLoading() {
    if(CheckBoxOG3.checked===true) {
        document.getElementById('scrollContainer').scrollTo({top: 0, behavior: 'smooth'});
        setTimeout(function () {
            document.getElementById('scrollContainer').classList.add('final_loader_transition');
        }, 550);
        setTimeout(function () {
            document.getElementById('finalLoader').style.display = "flex";
        }, 1000);
    }
    else {
        alert('Please Check the Declaration.');
    }
}



function GenderBoxOpen() {
    GenderOptions.classList.remove('gender_options_hider');
    GenderOptions.classList.add('gender_options');
    GenderOption.classList.remove('gender_option_container_hider');
    GenderOption.classList.add('gender_option_container');
    GenderBox.classList.remove('adm_gender_text');
    GenderBox.classList.add('adm_gender_text_active');
    GenderOptions.classList.add('show');
    DOBBoxClose();
    MediumBoxClose();
    CourseTypeBoxClose();
    ReligionBoxClose();
    CategoryBoxClose();
    NationalityBoxClose();
    StateBoxClose();
    CityBoxClose();
}

function GenderBoxClose() {
    GenderOptions.classList.remove('show');
    GenderBox.classList.add('adm_gender_text');
    if(GenderBox.value==="") {
    	GenderBox.classList.remove('adm_gender_text_active');
    }
    else {
    	GenderBox.classList.add('adm_gender_text_active');
    }
}

function optionSelected() {
    GenderOptions.classList.remove('gender_options');
    GenderOptions.classList.add('gender_options_hider');
    GenderOption.classList.remove('gender_option_container');
    GenderOption.classList.add('gender_option_container_hider');
    GenderOptions.classList.add('show');
}
function Option1() {
    GenderBox.value="Male";
    optionSelected();
}
function Option2() {
    GenderBox.value="Female";
    optionSelected();
}




function DOBBoxOpen() {
    DOBOptions.classList.remove('dob_options_hider');
    DOBOptions.classList.add('dob_options');
    DOBOption.classList.remove('dob_option_container_hider');
    DOBOption.classList.add('dob_option_container');
    DOBBox.classList.remove('adm_dob_text');
    DOBBox.classList.add('adm_dob_text_active');
    DOBOptions.classList.add('show');
    GenderBoxClose();
    MediumBoxClose();
    CourseTypeBoxClose();
    ReligionBoxClose();
    CategoryBoxClose();
    NationalityBoxClose();
    StateBoxClose();
    CityBoxClose();
}

function DOBBoxClose() {
    DOBOptions.classList.remove('show');
    DOBBox.classList.add('adm_dob_text');
    if(DOBBox.value==="") {
    	DOBBox.classList.remove('adm_dob_text_active');
    }
    else {
    	DOBBox.classList.add('adm_dob_text_active');
    }
}
function DoptionSelected() {
    DOBOptions.classList.remove('dob_options');
    DOBOptions.classList.add('dob_options_hider');
    DOBOption.classList.remove('dob_option_container');
    DOBOption.classList.add('dob_option_container_hider');
    DOBOptions.classList.add('show');
}
$("#adm_dob_date").delegate("div","click",function(e){
    $("#adm_dob_date .dob_option_active").removeClass("dob_option_active");
    $(this).addClass("dob_option_active");
});
$("#adm_dob_month").delegate("div","click",function(e){
    $("#adm_dob_month .dob_option_active").removeClass("dob_option_active");
    $(this).addClass("dob_option_active");
});
$("#adm_dob_year").delegate("div","click",function(e){
    $("#adm_dob_year .dob_option_active").removeClass("dob_option_active");
    $(this).addClass("dob_option_active");
});

function DDOption1() {
    date = "01";
    DOBOptions.classList.add('show');
}
function DDOption2() {
    date = "02";
}
function DDOption3() {
    date = "03";
}
function DDOption4() {
    date = "04";
}
function DDOption5() {
    date = "05";
}
function DDOption6() {
    date = "06";
}
function DDOption7() {
    date = "07";
}
function DDOption8() {
    date = "08";
}
function DDOption9() {
    date = "09";
}
function DDOption10() {
    date = "10";
}
function DDOption11() {
    date = "11";
}
function DDOption12() {
    date = "12";
}
function DDOption13() {
    date = "13";
}
function DDOption14() {
    date = "14";
}
function DDOption15() {
    date = "15";
}
function DDOption16() {
    date = "16";
}
function DDOption17() {
    date = "17";
}
function DDOption18() {
    date = "19";
}
function DDOption19() {
    date = "19";
}
function DDOption20() {
    date = "20";
}
function DDOption21() {
    date = "21";
}
function DDOption22() {
    date = "22";
}
function DDOption23() {
    date = "23";
}
function DDOption24() {
    date = "24";
}
function DDOption25() {
    date = "25";
}
function DDOption26() {
    date = "26";
}
function DDOption27() {
    date = "27";
}
function DDOption28() {
    date = "28";
}
function DDOption29() {
    date = "29";
}
function DDOption30() {
    date = "30";
}
function DDOption31() {
    date = "31";
}
function DMOption1() {
    month = "Jan";
}
function DMOption2() {
    month = "Feb";
}
function DMOption3() {
    month = "Mar";
}
function DMOption4() {
    month = "Apr";
}
function DMOption5() {
    month = "May";
}
function DMOption6() {
    month = "Jun";
}
function DMOption7() {
    month = "Jul";
}
function DMOption8() {
    month = "Aug";
}
function DMOption9() {
    month = "Sep";
}
function DMOption10() {
    month = "Oct";
}
function DMOption11() {
    month = "Nov";
}
function DMOption12() {
    month = "Dec";
}
function DYOption18() {
    DOBBox.value = date + "/" + month + "/" + (currentYear-34);
    DoptionSelected();
}
function DYOption17() {
    DOBBox.value = date + "/" + month + "/" + (currentYear-33);
    DoptionSelected();
}
function DYOption16() {
    DOBBox.value = date + "/" + month + "/" + (currentYear-32);
    DoptionSelected();
}
function DYOption15() {
    DOBBox.value = date + "/" + month + "/" + (currentYear-31);
    DoptionSelected();
}
function DYOption14() {
    DOBBox.value = date + "/" + month + "/" + (currentYear-30);
    DoptionSelected();
}
function DYOption13() {
    DOBBox.value = date + "/" + month + "/" + (currentYear-29);
    DoptionSelected();
}
function DYOption12() {
    DOBBox.value = date + "/" + month + "/" + (currentYear-28);
    DoptionSelected();
}
function DYOption11() {
    DOBBox.value = date + "/" + month + "/" + (currentYear-27);
    DoptionSelected();
}
function DYOption10() {
    DOBBox.value = date + "/" + month + "/" + (currentYear-26);
    DoptionSelected();
}
function DYOption9() {
    DOBBox.value = date + "/" + month + "/" + (currentYear-25);
    DoptionSelected();
}
function DYOption8() {
    DOBBox.value = date + "/" + month + "/" + (currentYear-24);
    DoptionSelected();
}
function DYOption7() {
    DOBBox.value = date + "/" + month + "/" + (currentYear-23);
    DoptionSelected();
}
function DYOption6() {
    DOBBox.value = date + "/" + month + "/" + (currentYear-22);
    DoptionSelected();
}
function DYOption5() {
    DOBBox.value = date + "/" + month + "/" + (currentYear-21);
    DoptionSelected();
}
function DYOption4() {
    DOBBox.value = date + "/" + month + "/" + (currentYear-20);
    DoptionSelected();
}
function DYOption3() {
    DOBBox.value = date + "/" + month + "/" + (currentYear-19);
    DoptionSelected();
}
function DYOption2() {
    DOBBox.value = date + "/" + month + "/" + (currentYear-18);
    DoptionSelected();
}
function DYOption1() {
    DOBBox.value = date + "/" + month + "/" + (currentYear-17);
    DoptionSelected();
}                      


function ReligionBoxOpen() {
    ReligionOptions.classList.remove('religion_options_hider');
    ReligionOptions.classList.add('religion_options');
    ReligionOption.classList.remove('religion_option_container_hider');
    ReligionOption.classList.add('religion_option_container');
    ReligionBox.classList.remove('adm_religion_text');
    ReligionBox.classList.add('adm_religion_text_active');
    ReligionOptions.classList.add('show');
    GenderBoxClose();
    DOBBoxClose();
    MediumBoxClose();
    CourseTypeBoxClose();
    CategoryBoxClose();
    NationalityBoxClose();
    StateBoxClose();
    CityBoxClose();
}
function ReligionBoxClose() {
    ReligionOptions.classList.remove('show');
    ReligionBox.classList.add('adm_religion_text');
    if(ReligionBox.value==="") {
    	ReligionBox.classList.remove('adm_religion_text_active');
    }
    else {
    	ReligionBox.classList.add('adm_religion_text_active');
    }
}

function RoptionSelected() {
    ReligionOptions.classList.remove('religion_options');
    ReligionOptions.classList.add('religion_options_hider');
    ReligionOption.classList.remove('religion_option_container');
    ReligionOption.classList.add('religion_option_container_hider');
    ReligionOptions.classList.add('show');
}
function ROption1() {
    ReligionBox.value="Hindu";
    RoptionSelected();
}
function ROption2() {
    ReligionBox.value="Muslim";
    RoptionSelected();
}
function ROption3() {
    ReligionBox.value="Sikh";
    RoptionSelected();
}
function ROption4() {
    ReligionBox.value="Christian";
    RoptionSelected();
}
function ROption5() {
    ReligionBox.value="Jainism";
    RoptionSelected();
}
function ROption6() {
    ReligionBox.value="Buddhist";
    RoptionSelected();
}
function ROption7() {
    ReligionBox.value="Zorastrian";
    RoptionSelected();
}



function MediumBoxOpen() {
    MediumOptions.classList.remove('medium_options_hider');
    MediumOptions.classList.add('medium_options');
    MediumOption.classList.remove('medium_option_container_hider');
    MediumOption.classList.add('medium_option_container');
    MediumBox.classList.remove('adm_medium_text');
    MediumBox.classList.add('adm_medium_text_active');
    MediumOptions.classList.add('show');
    GenderBoxClose();
    DOBBoxClose();
    CourseTypeBoxClose();
    ReligionBoxClose();
    CategoryBoxClose();
    NationalityBoxClose();
    StateBoxClose();
    CityBoxClose();
}

function MediumBoxClose() {
    MediumOptions.classList.remove('show');
    MediumBox.classList.add('adm_medium_text');
    if(MediumBox.value==="") {
    	MediumBox.classList.remove('adm_medium_text_active');
    }
    else {
    	MediumBox.classList.add('adm_medium_text_active');
    }
}

function MoptionSelected() {
    MediumOptions.classList.remove('medium_options');
    MediumOptions.classList.add('medium_options_hider');
    MediumOption.classList.remove('medium_option_container');
    MediumOption.classList.add('medium_option_container_hider');
    MediumOptions.classList.add('show');
}
function MOption1() {
    MediumBox.value="English";
    MoptionSelected();
}
function MOption2() {
    MediumBox.value="Hindi";
    MoptionSelected();
}



function CourseTypeBoxOpen() {
    CourseTypeOptions.classList.remove('course_type_options_hider');
    CourseTypeOptions.classList.add('course_type_options');
    CourseTypeOption.classList.remove('course_type_option_container_hider');
    CourseTypeOption.classList.add('course_type_option_container');
    CourseTypeBox.classList.remove('adm_course_type_text');
    CourseTypeBox.classList.add('adm_course_type_text_active');
    CourseTypeOptions.classList.add('show');
    GenderBoxClose();
    DOBBoxClose();
    MediumBoxClose();
    ReligionBoxClose();
    CategoryBoxClose();
    NationalityBoxClose();
    StateBoxClose();
    CityBoxClose();
}

function CourseTypeBoxClose() {
    CourseTypeOptions.classList.remove('show');
    CourseTypeBox.classList.add('adm_course_type_text');
        if(CourseTypeBox.value==="") {
    			CourseTypeBox.classList.remove('adm_course_type_text_active');
    }
    else {
    				CourseTypeBox.classList.add('adm_course_type_text_active');
    }
}

function CToptionSelected() {
    CourseTypeOptions.classList.remove('course_type_options');
    CourseTypeOptions.classList.add('course_type_options_hider');
    CourseTypeOption.classList.remove('course_type_option_container');
    CourseTypeOption.classList.add('course_type_option_container_hider');
    CourseTypeOptions.classList.add('show');
}
function CTOption1() {
    CourseTypeBox.value="Regular";
    CToptionSelected();
}
function CTOption2() {
    CourseTypeBox.value="Private";
    CToptionSelected();
}





function CategoryBoxOpen() {
    CategoryOptions.classList.remove('category_options_hider');
    CategoryOptions.classList.add('category_options');
    CategoryOption.classList.remove('category_option_container_hider');
    CategoryOption.classList.add('category_option_container');
    CategoryBox.classList.remove('adm_category_text');
    CategoryBox.classList.add('adm_category_text_active');
    CategoryOptions.classList.add('show');
    GenderBoxClose();
    DOBBoxClose();
    MediumBoxClose();
    CourseTypeBoxClose();
    ReligionBoxClose();
    NationalityBoxClose();
    StateBoxClose();
    CityBoxClose();
}
function CategoryBoxClose() {
    CategoryOptions.classList.remove('show');
    CategoryBox.classList.add('adm_category_text');
    if(CategoryBox.value==="") {
    	CategoryBox.classList.remove('adm_category_text_active');
    }
    else {
    	CategoryBox.classList.add('adm_category_text_active');
    }
}

function CoptionSelected() {
    CategoryOptions.classList.remove('category_options');
    CategoryOptions.classList.add('category_options_hider');
    CategoryOption.classList.remove('category_option_container');
    CategoryOption.classList.add('category_option_container_hider');
    CategoryOptions.classList.add('show');
}
function COption1() {
    CategoryBox.value="General";
    CoptionSelected();
}
function COption2() {
    CategoryBox.value="SC";
    CoptionSelected();
}
function COption3() {
    CategoryBox.value="ST";
    CoptionSelected();
}
function COption4() {
    CategoryBox.value="OBC";
    CoptionSelected();
}





const nation = "0";

function NationalityBoxOpen() {
    NationalityOptions.classList.remove('nationality_options_hider');
    NationalityOptions.classList.add('nationality_options');
    NationalityOption.classList.remove('nationality_option_container_hider');
    NationalityOption.classList.add('nationality_option_container');
    NationalityBox.classList.remove('adm_nationality_text');
    NationalityBox.classList.add('adm_nationality_text_active');
    NationalityOptions.classList.add('show');
    GenderBoxClose();
    DOBBoxClose();
    MediumBoxClose();
    CourseTypeBoxClose();
    ReligionBoxClose();
    CategoryBoxClose();
    StateBoxClose();
    CityBoxClose();
}
function NationalityBoxClose() {
    NationalityOptions.classList.remove('show');
    NationalityBox.classList.add('adm_nationality_text');
    if(NationalityBox.value==="") {
    	NationalityBox.classList.remove('adm_nationality_text_active');
    }
    else {
    	NationalityBox.classList.add('adm_nationality_text_active');
    }
}

function NoptionSelected() {
    NationalityOptions.classList.remove('nationality_options');
    NationalityOptions.classList.add('nationality_options_hider');
    NationalityOption.classList.remove('nationality_option_container');
    NationalityOption.classList.add('nationality_option_container_hider');
    NationalityOptions.classList.add('show');
}
function NOption1() {
    NationalityBox.value="Indian";
    NoptionSelected();
    document.getElementById('state_options').classList.remove('hidden');
    document.getElementById('state_dropdown_icon').classList.remove('hidden');
    StateBox.readOnly = true;
}
function NOption2() {
    NationalityBox.value="Please Specify";
    NoptionSelected();
    document.getElementById('state_options').classList.add('hidden');
    document.getElementById('state_dropdown_icon').classList.add('hidden');
    StateBox.readOnly = false;
    StateBox.classList.remove('adm_state_text_active');
    StateBox.classList.add('adm_state_text');
}
                        



function StateBoxOpen() {
    if(StateOptions.classList.contains('hidden')) {
        StateBox.readOnly = false;
        StateBox.classList.remove('adm_state_text_active');
        StateBox.classList.add('adm_state_text');
    }
    else {
        StateBox.classList.remove('adm_state_text');
        StateBox.classList.add('adm_state_text_active');
        StateOptions.classList.remove('state_options_hider');
        StateOptions.classList.add('state_options');
        StateOption.classList.remove('state_option_container_hider');
        StateOption.classList.add('state_option_container');
        StateOptions.classList.add('show');
        StateBox.readOnly = true;
    }
    GenderBoxClose();
    DOBBoxClose();
    MediumBoxClose();
    CourseTypeBoxClose();
    ReligionBoxClose();
    CategoryBoxClose();
    NationalityBoxClose();
    CityBoxClose();
}
function StateBoxClose() {
    StateOptions.classList.remove('show');
    StateBox.classList.add('adm_state_text');
    if(StateBox.value==="") {
    	StateBox.classList.remove('adm_state_text_active');
    }
    else {
    	StateBox.classList.add('adm_state_text_active');
    }
}

function SoptionSelected() {
    StateOptions.classList.remove('state_options');
    StateOptions.classList.add('state_options_hider');
    StateOption.classList.remove('state_option_container');
    StateOption.classList.add('state_option_container_hider');
    StateOptions.classList.add('show');
}

function CityOptionsLoad() {
    document.getElementById('city_options').classList.remove('hidden');
    document.getElementById('city_dropdown_icon').classList.remove('hidden');
    $('.city_option').filter(function() {
        return $.trim($(this).text()) === ''
    }).hide()
}

function SOption1() {
    StateBox.value= "Madhya Pradesh";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Jabalpur";
    document.getElementById('coption2').innerHTML = "Bhopal";
    document.getElementById('coption3').innerHTML = "Indore";
    document.getElementById('coption4').innerHTML = "Gwalior";
    document.getElementById('coption5').innerHTML = "Ujjain";
    document.getElementById('coption6').innerHTML = "Katni";
    document.getElementById('coption7').innerHTML = "Agar Malwa";
    document.getElementById('coption8').innerHTML = "Alirajpur";
    document.getElementById('coption9').innerHTML = "Anuppur";
    document.getElementById('coption10').innerHTML = "Ashoknagar";
    document.getElementById('coption11').innerHTML = "Balaghat";
    document.getElementById('coption12').innerHTML = "Barwani";
    document.getElementById('coption13').innerHTML = "Betul";
    document.getElementById('coption14').innerHTML = "Bhind";
    document.getElementById('coption15').innerHTML = "Burhanpur";
    document.getElementById('coption16').innerHTML = "Chhatarpur";
    document.getElementById('coption17').innerHTML = "Chhindwara";
    document.getElementById('coption18').innerHTML = "Damoh";
    document.getElementById('coption19').innerHTML = "Datia";
    document.getElementById('coption20').innerHTML = "Dewas";
    document.getElementById('coption21').innerHTML = "Dhar";
    document.getElementById('coption22').innerHTML = "Dindori";
    document.getElementById('coption23').innerHTML = "Guna";
    document.getElementById('coption24').innerHTML = "Harda";
    document.getElementById('coption25').innerHTML = "Hoshangabad";
    document.getElementById('coption26').innerHTML = "Jhabua";
    document.getElementById('coption27').innerHTML = "Khandwa";
    document.getElementById('coption28').innerHTML = "Khargone";
    document.getElementById('coption29').innerHTML = "Mandla";
    document.getElementById('coption30').innerHTML = "Mandsaur";
    document.getElementById('coption31').innerHTML = "Morena";
    document.getElementById('coption32').innerHTML = "Narsinghpur";
    document.getElementById('coption33').innerHTML = "Neemuch";
    document.getElementById('coption34').innerHTML = "Panna";
    document.getElementById('coption35').innerHTML = "Raisen";
    document.getElementById('coption36').innerHTML = "Rajgarh";
    document.getElementById('coption37').innerHTML = "Ratlam";
    document.getElementById('coption38').innerHTML = "Rewa";
    document.getElementById('coption39').innerHTML = "Sagar";
    document.getElementById('coption40').innerHTML = "Satna";
    document.getElementById('coption41').innerHTML = "Sehore";
    document.getElementById('coption42').innerHTML = "Seoni";
    document.getElementById('coption43').innerHTML = "Shahdol";
    document.getElementById('coption44').innerHTML = "Shajapur";
    document.getElementById('coption45').innerHTML = "Sheopur";
    document.getElementById('coption46').innerHTML = "Shivpuri";
    document.getElementById('coption47').innerHTML = "Sidhi";
    document.getElementById('coption48').innerHTML = "Singrauli";
    document.getElementById('coption49').innerHTML = "Tikamgarh";
    document.getElementById('coption50').innerHTML = "Umaria";
    document.getElementById('coption51').innerHTML = "Vidisha";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption2() {
    StateBox.value= "Chhattisgarh";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "New Raipur";
    document.getElementById('coption2').innerHTML = "Raipur";
    document.getElementById('coption3').innerHTML = "Bhilai Durg";
    document.getElementById('coption4').innerHTML = "Korba";
    document.getElementById('coption5').innerHTML = "Bilaspur";
    document.getElementById('coption6').innerHTML = "Balod";
    document.getElementById('coption7').innerHTML = "Baloda Bazar";
    document.getElementById('coption8').innerHTML = "Balrampur";
    document.getElementById('coption9').innerHTML = "Bastar";
    document.getElementById('coption10').innerHTML = "Bemetara";
    document.getElementById('coption11').innerHTML = "Bijapur";
    document.getElementById('coption12').innerHTML = "Dantewada";
    document.getElementById('coption13').innerHTML = "Dhamtari";
    document.getElementById('coption14').innerHTML = "Gariyaband";
    document.getElementById('coption15').innerHTML = "Janjgir-Champa";
    document.getElementById('coption16').innerHTML = "Jashpur";
    document.getElementById('coption17').innerHTML = "Kabirdham";
    document.getElementById('coption18').innerHTML = "Kanker";
    document.getElementById('coption19').innerHTML = "Kondagaon";
    document.getElementById('coption20').innerHTML = "Korba";
    document.getElementById('coption21').innerHTML = "Korea";
    document.getElementById('coption22').innerHTML = "Mahasamund";
    document.getElementById('coption23').innerHTML = "Mungeli";
    document.getElementById('coption24').innerHTML = "Narayanpur";
    document.getElementById('coption25').innerHTML = "Raigarh";
    document.getElementById('coption26').innerHTML = "Rajnandgaon";
    document.getElementById('coption27').innerHTML = "Sukma";
    document.getElementById('coption28').innerHTML = "Surajpur";
    document.getElementById('coption29').innerHTML = "Surguja";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption3() {
    StateBox.value= "Uttar Pradesh";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Noida";
    document.getElementById('coption2').innerHTML = "Lucknow";
    document.getElementById('coption3').innerHTML = "Varanasi";
    document.getElementById('coption4').innerHTML = "Kanpur";
    document.getElementById('coption5').innerHTML = "Agra";
    document.getElementById('coption6').innerHTML = "Meerut";
    document.getElementById('coption7').innerHTML = "Prayagraj";
    document.getElementById('coption8').innerHTML = "Ghaziabad";
    document.getElementById('coption9').innerHTML = "Bareilly";
    document.getElementById('coption10').innerHTML = "Aligarh";
    document.getElementById('coption11').innerHTML = "Ambedkar Nagar";
    document.getElementById('coption12').innerHTML = "Amethi";
    document.getElementById('coption13').innerHTML = "Amroha";
    document.getElementById('coption14').innerHTML = "Auraiya";
    document.getElementById('coption15').innerHTML = "Azamgarh";
    document.getElementById('coption16').innerHTML = "Baghpat";
    document.getElementById('coption17').innerHTML = "Bahraich";
    document.getElementById('coption18').innerHTML = "Ballia";
    document.getElementById('coption19').innerHTML = "Balrampur";
    document.getElementById('coption20').innerHTML = "Banda";
    document.getElementById('coption21').innerHTML = "Barabanki";
    document.getElementById('coption22').innerHTML = "Basti";
    document.getElementById('coption23').innerHTML = "Bhadohi";
    document.getElementById('coption24').innerHTML = "Bijnor";
    document.getElementById('coption25').innerHTML = "Budaun";
    document.getElementById('coption26').innerHTML = "Bulandshahr";
    document.getElementById('coption27').innerHTML = "Chandauli";
    document.getElementById('coption28').innerHTML = "Chitrakoot";
    document.getElementById('coption29').innerHTML = "Deoria";
    document.getElementById('coption30').innerHTML = "Etah";
    document.getElementById('coption31').innerHTML = "Etawah";
    document.getElementById('coption32').innerHTML = "Faizabad";
    document.getElementById('coption33').innerHTML = "Farrukhabad";
    document.getElementById('coption34').innerHTML = "Fatehpur";
    document.getElementById('coption35').innerHTML = "Firozabad";
    document.getElementById('coption36').innerHTML = "Gautam Buddha Nagar";
    document.getElementById('coption37').innerHTML = "Ghazipur";
    document.getElementById('coption38').innerHTML = "Gonda";
    document.getElementById('coption39').innerHTML = "Gorakhpur";
    document.getElementById('coption40').innerHTML = "Hamirpur";
    document.getElementById('coption41').innerHTML = "Hapur";
    document.getElementById('coption42').innerHTML = "Hardoi";
    document.getElementById('coption43').innerHTML = "Hathras";
    document.getElementById('coption44').innerHTML = "Jalaun";
    document.getElementById('coption45').innerHTML = "Jaunpur";
    document.getElementById('coption46').innerHTML = "Jhansi";
    document.getElementById('coption47').innerHTML = "Kannauj";
    document.getElementById('coption48').innerHTML = "Kanpur Dehat";
    document.getElementById('coption49').innerHTML = "Kasganj";
    document.getElementById('coption50').innerHTML = "Kaushambi";
    document.getElementById('coption51').innerHTML = "Kushinagar";
    document.getElementById('coption52').innerHTML = "Lakhimpur - Kheri";
    document.getElementById('coption53').innerHTML = "Lalitpur";
    document.getElementById('coption54').innerHTML = "Maharajganj";
    document.getElementById('coption55').innerHTML = "Mahoba";
    document.getElementById('coption56').innerHTML = "Mainpuri";
    document.getElementById('coption57').innerHTML = "Mathura";
    document.getElementById('coption58').innerHTML = "Mau";
    document.getElementById('coption59').innerHTML = "Mirzapur";
    document.getElementById('coption60').innerHTML = "Moradabad";
    document.getElementById('coption61').innerHTML = "Muzaffarnagar";
    document.getElementById('coption62').innerHTML = "Pilibhit";
    document.getElementById('coption63').innerHTML = "Pratapgarh";
    document.getElementById('coption64').innerHTML = "RaeBareli";
    document.getElementById('coption65').innerHTML = "Rampur";
    document.getElementById('coption66').innerHTML = "Saharanpur";
    document.getElementById('coption67').innerHTML = "Sambhal";
    document.getElementById('coption68').innerHTML = "Sant Kabir Nagar";
    document.getElementById('coption69').innerHTML = "Shahjahanpur";
    document.getElementById('coption70').innerHTML = "Shamali";
    document.getElementById('coption71').innerHTML = "Shravasti";
    document.getElementById('coption72').innerHTML = "Siddharth Nagar";
    document.getElementById('coption73').innerHTML = "Sitapur";
    document.getElementById('coption74').innerHTML = "Sonbhadra";
    document.getElementById('coption75').innerHTML = "Sultanpur";
    document.getElementById('coption76').innerHTML = "Unnao";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption4() {
    StateBox.value="Andaman & Nicobar Islands";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Port Blair";
    document.getElementById('coption2').innerHTML = "Nicobar";
    document.getElementById('coption3').innerHTML = "North & Middle Andaman";
    document.getElementById('coption4').innerHTML = "South Andaman";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption5() {
    StateBox.value="Andhra Pradesh";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Visakhapatnam";
    document.getElementById('coption2').innerHTML = "Vijaywada";
    document.getElementById('coption3').innerHTML = "Guntur";
    document.getElementById('coption4').innerHTML = "Nellore";
    document.getElementById('coption5').innerHTML = "Anantapur";
    document.getElementById('coption6').innerHTML = "Chittoor";
    document.getElementById('coption7').innerHTML = "East Godavari";
    document.getElementById('coption8').innerHTML = "Kadapa";
    document.getElementById('coption9').innerHTML = "Krishna";
    document.getElementById('coption10').innerHTML = "Kurnool";
    document.getElementById('coption11').innerHTML = "Prakasam";
    document.getElementById('coption12').innerHTML = "Srikakulam";
    document.getElementById('coption13').innerHTML = "Vizianagaram";
    document.getElementById('coption14').innerHTML = "West Godavari";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption6() {
    StateBox.value="Arunachal Pradesh";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Itanagar";
    document.getElementById('coption2').innerHTML = "Pasighat";
    document.getElementById('coption3').innerHTML = "Aalo";
    document.getElementById('coption4').innerHTML = "Seppa";
    document.getElementById('coption5').innerHTML = "Tezu";
    document.getElementById('coption6').innerHTML = "Anjaw";
    document.getElementById('coption7').innerHTML = "Changlang";
    document.getElementById('coption8').innerHTML = "Dibang Valley";
    document.getElementById('coption9').innerHTML = "East Kameng";
    document.getElementById('coption10').innerHTML = "East Siang";
    document.getElementById('coption11').innerHTML = "Kamle";
    document.getElementById('coption12').innerHTML = "Kra Daadi";
    document.getElementById('coption13').innerHTML = "Kurung Kumey";
    document.getElementById('coption14').innerHTML = "Lepa Rada";
    document.getElementById('coption15').innerHTML = "Lohit";
    document.getElementById('coption16').innerHTML = "Longding";
    document.getElementById('coption17').innerHTML = "Lower Dibang Valley";
    document.getElementById('coption18').innerHTML = "Lower Siang";
    document.getElementById('coption19').innerHTML = "Lower Subansiri";
    document.getElementById('coption20').innerHTML = "Namsai";
    document.getElementById('coption21').innerHTML = "Pakke Kessang";
    document.getElementById('coption22').innerHTML = "Papum Pare";
    document.getElementById('coption23').innerHTML = "Shi Yomi";
    document.getElementById('coption24').innerHTML = "Siang";
    document.getElementById('coption25').innerHTML = "Tawang";
    document.getElementById('coption26').innerHTML = "Tirap";
    document.getElementById('coption27').innerHTML = "Upper Siang";
    document.getElementById('coption28').innerHTML = "Upper Subansiri";
    document.getElementById('coption29').innerHTML = "West Kameng";
    document.getElementById('coption30').innerHTML = "West Siang";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption7() {
    StateBox.value="Assam";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Guwahati";
    document.getElementById('coption2').innerHTML = "Silchar";
    document.getElementById('coption3').innerHTML = "Dibrugarh";
    document.getElementById('coption4').innerHTML = "Jorhat";
    document.getElementById('coption5').innerHTML = "Nagaon";
    document.getElementById('coption6').innerHTML = "Baksa";
    document.getElementById('coption7').innerHTML = "Barpeta";
    document.getElementById('coption8').innerHTML = "Biswanath";
    document.getElementById('coption9').innerHTML = "Bongaigaon";
    document.getElementById('coption10').innerHTML = "Cachar";
    document.getElementById('coption11').innerHTML = "Charaideo";
    document.getElementById('coption12').innerHTML = "Chirang";
    document.getElementById('coption13').innerHTML = "Darrang";
    document.getElementById('coption14').innerHTML = "Dhemaji";
    document.getElementById('coption15').innerHTML = "Dhubri";
    document.getElementById('coption16').innerHTML = "Dima Hasao";
    document.getElementById('coption17').innerHTML = "Goalpara";
    document.getElementById('coption18').innerHTML = "Golaghat";
    document.getElementById('coption19').innerHTML = "Hailakandi";
    document.getElementById('coption20').innerHTML = "Hojai";
    document.getElementById('coption21').innerHTML = "Kamrup";
    document.getElementById('coption22').innerHTML = "Kamrup Metropolitan";
    document.getElementById('coption23').innerHTML = "Karbi Anglong";
    document.getElementById('coption24').innerHTML = "Karimganj";
    document.getElementById('coption25').innerHTML = "Kokrajhar";
    document.getElementById('coption26').innerHTML = "Lakhimpur";
    document.getElementById('coption27').innerHTML = "Majuli";
    document.getElementById('coption28').innerHTML = "Morigaon";
    document.getElementById('coption29').innerHTML = "Nalbari";
    document.getElementById('coption30').innerHTML = "Sivasagar";
    document.getElementById('coption31').innerHTML = "Sonitpur";
    document.getElementById('coption32').innerHTML = "South Salamara-Mankachar";
    document.getElementById('coption33').innerHTML = "Tinsukia";
    document.getElementById('coption34').innerHTML = "Udalguri";
    document.getElementById('coption35').innerHTML = "West Karbi Anglong";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption8() {
    StateBox.value="Bihar";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Patna";
    document.getElementById('coption2').innerHTML = "Gaya";
    document.getElementById('coption3').innerHTML = "Bhagalpur";
    document.getElementById('coption4').innerHTML = "Muzaffarpur";
    document.getElementById('coption5').innerHTML = "Darbhanga";
    document.getElementById('coption6').innerHTML = "Araria";
    document.getElementById('coption7').innerHTML = "Arwal";
    document.getElementById('coption8').innerHTML = "Aurangabad";
    document.getElementById('coption9').innerHTML = "Banka";
    document.getElementById('coption10').innerHTML = "Begusarai";
    document.getElementById('coption11').innerHTML = "Bhojpur";
    document.getElementById('coption12').innerHTML = "Buxar";
    document.getElementById('coption13').innerHTML = "Gopalganj";
    document.getElementById('coption14').innerHTML = "Jamui";
    document.getElementById('coption15').innerHTML = "Jehanabad";
    document.getElementById('coption16').innerHTML = "Kaimur";
    document.getElementById('coption17').innerHTML = "Katihar";
    document.getElementById('coption18').innerHTML = "Khagaria";
    document.getElementById('coption19').innerHTML = "Kishanganj";
    document.getElementById('coption20').innerHTML = "Lakhisarai";
    document.getElementById('coption21').innerHTML = "Madhepura";
    document.getElementById('coption22').innerHTML = "Madhubani";
    document.getElementById('coption23').innerHTML = "Motihari";
    document.getElementById('coption24').innerHTML = "Munger";
    document.getElementById('coption25').innerHTML = "Nalanda";
    document.getElementById('coption26').innerHTML = "Nawada";
    document.getElementById('coption27').innerHTML = "Purnia";
    document.getElementById('coption28').innerHTML = "Rohtas";
    document.getElementById('coption29').innerHTML = "Saharsa";
    document.getElementById('coption30').innerHTML = "Samastipur";
    document.getElementById('coption31').innerHTML = "Saran";
    document.getElementById('coption32').innerHTML = "Sheikhpura";
    document.getElementById('coption33').innerHTML = "Sheohar";
    document.getElementById('coption34').innerHTML = "Sitamarhi";
    document.getElementById('coption35').innerHTML = "Siwan";
    document.getElementById('coption36').innerHTML = "Supaul";
    document.getElementById('coption37').innerHTML = "Vaishali";
    document.getElementById('coption38').innerHTML = "West Champaran";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption9() {
    StateBox.value="Chandigarh";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Chandigarh";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption10() {
    StateBox.value="Dadra & Nagar Haveli";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Dadra";
    document.getElementById('coption2').innerHTML = "Nagar Haveli";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption11() {
    StateBox.value="Daman & Diu";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Daman";
    document.getElementById('coption2').innerHTML = "Diu";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption12() {
    StateBox.value="Delhi";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Central Delhi";
    document.getElementById('coption2').innerHTML = "East Delhi";
    document.getElementById('coption3').innerHTML = "New Delhi";
    document.getElementById('coption4').innerHTML = "North Delhi";
    document.getElementById('coption5').innerHTML = "North East Delhi";
    document.getElementById('coption6').innerHTML = "North West Delhi";
    document.getElementById('coption7').innerHTML = "Shahdara";
    document.getElementById('coption8').innerHTML = "South Delhi";
    document.getElementById('coption9').innerHTML = "South East Delhi";
    document.getElementById('coption10').innerHTML = "South West Delhi";
    document.getElementById('coption11').innerHTML = "West Delhi";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption13() {
    StateBox.value="Goa";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Panaji";
    document.getElementById('coption2').innerHTML = "Mormugao";
    document.getElementById('coption3').innerHTML = "Margao";
    document.getElementById('coption4').innerHTML = "Mapusa";
    document.getElementById('coption5').innerHTML = "North Goa";
    document.getElementById('coption6').innerHTML = "South Goa";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption14() {
    StateBox.value="Gujrat";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Ahmedabad";
    document.getElementById('coption2').innerHTML = "Surat";
    document.getElementById('coption3').innerHTML = "Vadodara";
    document.getElementById('coption4').innerHTML = "Rajkot";
    document.getElementById('coption5').innerHTML = "Bhavnagar";
    document.getElementById('coption6').innerHTML = "Amreli";
    document.getElementById('coption7').innerHTML = "Anand";
    document.getElementById('coption8').innerHTML = "Aravalli";
    document.getElementById('coption9').innerHTML = "Banaskantha";
    document.getElementById('coption10').innerHTML = "Bharuch";
    document.getElementById('coption11').innerHTML = "Botad";
    document.getElementById('coption12').innerHTML = "Chhota Udepur";
    document.getElementById('coption13').innerHTML = "Dahod";
    document.getElementById('coption14').innerHTML = "Dangs";
    document.getElementById('coption15').innerHTML = "Devbhoomi Dwarka";
    document.getElementById('coption16').innerHTML = "Gandhinagar";
    document.getElementById('coption17').innerHTML = "Gir Somnath";
    document.getElementById('coption18').innerHTML = "Jamnagar";
    document.getElementById('coption19').innerHTML = "Junagadh";
    document.getElementById('coption20').innerHTML = "Kachchh";
    document.getElementById('coption21').innerHTML = "Kheda";
    document.getElementById('coption22').innerHTML = "Mahisagar";
    document.getElementById('coption23').innerHTML = "Mehsana";
    document.getElementById('coption24').innerHTML = "Morbi";
    document.getElementById('coption25').innerHTML = "Narmada";
    document.getElementById('coption26').innerHTML = "Navsari";
    document.getElementById('coption27').innerHTML = "Panchmahal";
    document.getElementById('coption28').innerHTML = "Patan";
    document.getElementById('coption29').innerHTML = "Porbandar";
    document.getElementById('coption30').innerHTML = "Sabarkantha";
    document.getElementById('coption31').innerHTML = "Surendranagar";
    document.getElementById('coption32').innerHTML = "Tapi";
    document.getElementById('coption33').innerHTML = "Valsad";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption15() {
    StateBox.value="Haryana";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Faridabad";
    document.getElementById('coption2').innerHTML = "Gurugram";
    document.getElementById('coption3').innerHTML = "Panipat";
    document.getElementById('coption4').innerHTML = "Ambala";
    document.getElementById('coption5').innerHTML = "Bhiwani";
    document.getElementById('coption6').innerHTML = "Charkhi Dadri";
    document.getElementById('coption7').innerHTML = "Fatehabad";
    document.getElementById('coption8').innerHTML = "Hisar";
    document.getElementById('coption9').innerHTML = "Jhajjar";
    document.getElementById('coption10').innerHTML = "Jind";
    document.getElementById('coption11').innerHTML = "Kaithal";
    document.getElementById('coption12').innerHTML = "Karnal";
    document.getElementById('coption13').innerHTML = "Kurukshetra";
    document.getElementById('coption14').innerHTML = "Mahendragarh";
    document.getElementById('coption15').innerHTML = "Nuh";
    document.getElementById('coption16').innerHTML = "Palwal";
    document.getElementById('coption17').innerHTML = "Panchkula";
    document.getElementById('coption18').innerHTML = "Rewari";
    document.getElementById('coption19').innerHTML = "Rohtak";
    document.getElementById('coption20').innerHTML = "Sirsa";
    document.getElementById('coption21').innerHTML = "Sonipat";
    document.getElementById('coption22').innerHTML = "Yamunanagar";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption16() {
    StateBox.value="Himachal Pradesh";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Shimla";
    document.getElementById('coption2').innerHTML = "Dharamsala";
    document.getElementById('coption3').innerHTML = "Solan";
    document.getElementById('coption4').innerHTML = "Mandi";
    document.getElementById('coption5').innerHTML = "Palampur";
    document.getElementById('coption6').innerHTML = "Bilaspur";
    document.getElementById('coption7').innerHTML = "Chamba";
    document.getElementById('coption8').innerHTML = "Hamirpur";
    document.getElementById('coption9').innerHTML = "Kangra";
    document.getElementById('coption10').innerHTML = "Kinnaur";
    document.getElementById('coption11').innerHTML = "Kullu";
    document.getElementById('coption12').innerHTML = "Lahaul & Spiti";
    document.getElementById('coption13').innerHTML = "Sirmaur";
    document.getElementById('coption14').innerHTML = "Una";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption17() {
    StateBox.value="Jammu & Kashmir";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Srinagar";
    document.getElementById('coption2').innerHTML = "Jammu";
    document.getElementById('coption3').innerHTML = "Anantnag";
    document.getElementById('coption4').innerHTML = "Bandipore";
    document.getElementById('coption5').innerHTML = "Baramulla";
    document.getElementById('coption6').innerHTML = "Budgam";
    document.getElementById('coption7').innerHTML = "Doda";
    document.getElementById('coption8').innerHTML = "Ganderbal";
    document.getElementById('coption9').innerHTML = "Kathua";
    document.getElementById('coption10').innerHTML = "Kishtwar";
    document.getElementById('coption11').innerHTML = "Kulgam";
    document.getElementById('coption12').innerHTML = "Kupwara";
    document.getElementById('coption13').innerHTML = "Poonch";
    document.getElementById('coption14').innerHTML = "Pulwama";
    document.getElementById('coption15').innerHTML = "Rajouri";
    document.getElementById('coption16').innerHTML = "Ramban";
    document.getElementById('coption17').innerHTML = "Reasi";
    document.getElementById('coption18').innerHTML = "Samba";
    document.getElementById('coption19').innerHTML = "Shopian";
    document.getElementById('coption20').innerHTML = "Udhampur";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption18() {
    StateBox.value="Jharkhand";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Ranchi";
    document.getElementById('coption2').innerHTML = "Jamshedpur";
    document.getElementById('coption3').innerHTML = "Dhanbad";
    document.getElementById('coption4').innerHTML = "Bokaro";
    document.getElementById('coption5').innerHTML = "Chatra";
    document.getElementById('coption6').innerHTML = "Deoghar";
    document.getElementById('coption7').innerHTML = "Dumka";
    document.getElementById('coption8').innerHTML = "East Singhbhum";
    document.getElementById('coption9').innerHTML = "Garhwa";
    document.getElementById('coption10').innerHTML = "Giridih";
    document.getElementById('coption11').innerHTML = "Godda";
    document.getElementById('coption12').innerHTML = "Gumla";
    document.getElementById('coption13').innerHTML = "Hazaribag";
    document.getElementById('coption14').innerHTML = "Jamtara";
    document.getElementById('coption15').innerHTML = "Khunti";
    document.getElementById('coption16').innerHTML = "Koderma";
    document.getElementById('coption17').innerHTML = "Latehar";
    document.getElementById('coption18').innerHTML = "Lohardaga";
    document.getElementById('coption19').innerHTML = "Pakur";
    document.getElementById('coption20').innerHTML = "Palamu";
    document.getElementById('coption21').innerHTML = "Ramgarh";
    document.getElementById('coption22').innerHTML = "Sahibganj";
    document.getElementById('coption23').innerHTML = "Seraikela-Kharsawan";
    document.getElementById('coption24').innerHTML = "Simdega";
    document.getElementById('coption25').innerHTML = "West Singhbhum";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption19() {
    StateBox.value="Karnataka";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Bangalore";
    document.getElementById('coption2').innerHTML = "Hubli-Dharwad";
    document.getElementById('coption3').innerHTML = "Mysore";
    document.getElementById('coption4').innerHTML = "Gulbarga";
    document.getElementById('coption5').innerHTML = "Mangalore";
    document.getElementById('coption6').innerHTML = "Bagalkot";
    document.getElementById('coption7').innerHTML = "Bellary";
    document.getElementById('coption8').innerHTML = "Belgaum";
    document.getElementById('coption9').innerHTML = "Bengaluru Rural";
    document.getElementById('coption10').innerHTML = "Bidar";
    document.getElementById('coption11').innerHTML = "Bijapur";
    document.getElementById('coption12').innerHTML = "Chamarajanagar";
    document.getElementById('coption13').innerHTML = "Chikballapur";
    document.getElementById('coption14').innerHTML = "Chikkamagaluru";
    document.getElementById('coption15').innerHTML = "Chitradurga";
    document.getElementById('coption16').innerHTML = "Dakshina Kannada";
    document.getElementById('coption17').innerHTML = "Davangere";
    document.getElementById('coption18').innerHTML = "Dharwad";
    document.getElementById('coption19').innerHTML = "Gadag";
    document.getElementById('coption20').innerHTML = "Hassan";
    document.getElementById('coption21').innerHTML = "Haveri";
    document.getElementById('coption22').innerHTML = "Kodagu";
    document.getElementById('coption23').innerHTML = "Kolar";
    document.getElementById('coption24').innerHTML = "Koppal";
    document.getElementById('coption25').innerHTML = "Mandya";
    document.getElementById('coption26').innerHTML = "Raichur";
    document.getElementById('coption27').innerHTML = "Ramanagara";
    document.getElementById('coption28').innerHTML = "Shivamogga";
    document.getElementById('coption29').innerHTML = "Tumakuru";
    document.getElementById('coption30').innerHTML = "Udupi";
    document.getElementById('coption31').innerHTML = "Uttara Kannada";
    document.getElementById('coption32').innerHTML = "Yadgir";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption20() {
    StateBox.value="Kerala";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Thiruvananthapuram";
    document.getElementById('coption2').innerHTML = "Kozhikode";
    document.getElementById('coption3').innerHTML = "Kochi";
    document.getElementById('coption4').innerHTML = "Kollam";
    document.getElementById('coption5').innerHTML = "Thrissur";
    document.getElementById('coption6').innerHTML = "Kannur";
    document.getElementById('coption7').innerHTML = "Alappuzha";
    document.getElementById('coption8').innerHTML = "Ernakulam";
    document.getElementById('coption9').innerHTML = "Idukki";
    document.getElementById('coption10').innerHTML = "Kasaragod";
    document.getElementById('coption11').innerHTML = "Kottayam";
    document.getElementById('coption12').innerHTML = "Malappuram";
    document.getElementById('coption13').innerHTML = "Palakkad";
    document.getElementById('coption14').innerHTML = "Pathanamthitta";
    document.getElementById('coption15').innerHTML = "Wayanad";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption21() {
    StateBox.value="Ladakh";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Leh";
    document.getElementById('coption2').innerHTML = "Kargil";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption22() {
    StateBox.value="Lakshadweep";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Lakshadweep";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption23() {
    StateBox.value="Maharashtra";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Mumbai";
    document.getElementById('coption2').innerHTML = "Pune";
    document.getElementById('coption3').innerHTML = "Nagpur";
    document.getElementById('coption4').innerHTML = "Thane";
    document.getElementById('coption5').innerHTML = "Ahmednagar";
    document.getElementById('coption6').innerHTML = "Akola";
    document.getElementById('coption7').innerHTML = "Amravati";
    document.getElementById('coption8').innerHTML = "Aurangabad";
    document.getElementById('coption9').innerHTML = "Beed";
    document.getElementById('coption10').innerHTML = "Bhandara";
    document.getElementById('coption11').innerHTML = "Buldhana";
    document.getElementById('coption12').innerHTML = "Chandrapur";
    document.getElementById('coption13').innerHTML = "Dhule";
    document.getElementById('coption14').innerHTML = "Gadchiroli";
    document.getElementById('coption15').innerHTML = "Gondia";
    document.getElementById('coption16').innerHTML = "Hingoli";
    document.getElementById('coption17').innerHTML = "Jalgaon";
    document.getElementById('coption18').innerHTML = "Jalna";
    document.getElementById('coption19').innerHTML = "Kolhapur";
    document.getElementById('coption20').innerHTML = "Latur";
    document.getElementById('coption21').innerHTML = "Mumbai Suburban";
    document.getElementById('coption22').innerHTML = "Nagpur";
    document.getElementById('coption23').innerHTML = "Nanded";
    document.getElementById('coption24').innerHTML = "Nandurbar";
    document.getElementById('coption25').innerHTML = "Nashik";
    document.getElementById('coption26').innerHTML = "Osmanabad";
    document.getElementById('coption27').innerHTML = "Palghar";
    document.getElementById('coption28').innerHTML = "Parbhani";
    document.getElementById('coption29').innerHTML = "Pimpri-Chinchwad";
    document.getElementById('coption30').innerHTML = "Raigad";
    document.getElementById('coption31').innerHTML = "Ratnagiri";
    document.getElementById('coption32').innerHTML = "Sangli";
    document.getElementById('coption33').innerHTML = "Satara";
    document.getElementById('coption34').innerHTML = "Sindhudurg";
    document.getElementById('coption35').innerHTML = "Solapur";
    document.getElementById('coption36').innerHTML = "Wardha";
    document.getElementById('coption37').innerHTML = "Washim";
    document.getElementById('coption38').innerHTML = "Yavatmal";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption24() {
    StateBox.value="Manipur";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Imphal";
    document.getElementById('coption2').innerHTML = "Moreh";
    document.getElementById('coption3').innerHTML = "Nambol";
    document.getElementById('coption4').innerHTML = "Bishnupur";
    document.getElementById('coption5').innerHTML = "Chandel";
    document.getElementById('coption6').innerHTML = "Churachandpur";
    document.getElementById('coption7').innerHTML = "Jiribam";
    document.getElementById('coption8').innerHTML = "Kakching";
    document.getElementById('coption9').innerHTML = "Kamjong";
    document.getElementById('coption10').innerHTML = "Kangpokpi";
    document.getElementById('coption11').innerHTML = "Noney";
    document.getElementById('coption12').innerHTML = "Pherzawl";
    document.getElementById('coption13').innerHTML = "Senapati";
    document.getElementById('coption14').innerHTML = "Tamenglong";
    document.getElementById('coption15').innerHTML = "Tengnoupal";
    document.getElementById('coption16').innerHTML = "Thoubal";
    document.getElementById('coption17').innerHTML = "Ukhrul";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption25() {
    StateBox.value="Meghalaya";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Shillong";
    document.getElementById('coption2').innerHTML = "Cherapunji";
    document.getElementById('coption3').innerHTML = "Mawlynlong";
    document.getElementById('coption4').innerHTML = "Garo Hills";
    document.getElementById('coption5').innerHTML = "Jaintia Hills";
    document.getElementById('coption6').innerHTML = "Khasi Hills";
    document.getElementById('coption7').innerHTML = "Ri Bhoi";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption26() {
    StateBox.value="Mizoram";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Aizawl";
    document.getElementById('coption2').innerHTML = "Champhai";
    document.getElementById('coption3').innerHTML = "Kolasib";
    document.getElementById('coption4').innerHTML = "Lawngtlai";
    document.getElementById('coption5').innerHTML = "Lunglei";
    document.getElementById('coption6').innerHTML = "Mamit";
    document.getElementById('coption7').innerHTML = "Saiha";
    document.getElementById('coption8').innerHTML = "Serchhip";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption27() {
    StateBox.value="Nagaland";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Dimapur";
    document.getElementById('coption2').innerHTML = "Kiphire";
    document.getElementById('coption3').innerHTML = "Kohima";
    document.getElementById('coption4').innerHTML = "Longleng";
    document.getElementById('coption5').innerHTML = "Mokokchung";
    document.getElementById('coption6').innerHTML = "Mon";
    document.getElementById('coption7').innerHTML = "Peren";
    document.getElementById('coption8').innerHTML = "Phek";
    document.getElementById('coption9').innerHTML = "Tuensang";
    document.getElementById('coption10').innerHTML = "Wokha";
    document.getElementById('coption11').innerHTML = "Zunheboto";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption28() {
    StateBox.value="Odisha";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Bhubaneswar";
    document.getElementById('coption2').innerHTML = "Cuttack";
    document.getElementById('coption3').innerHTML = "Rourkela";
    document.getElementById('coption4').innerHTML = "Angul";
    document.getElementById('coption5').innerHTML = "Balangir";
    document.getElementById('coption6').innerHTML = "Balasore";
    document.getElementById('coption7').innerHTML = "Bargarh";
    document.getElementById('coption8').innerHTML = "Bhadrak";
    document.getElementById('coption9').innerHTML = "Boudh";
    document.getElementById('coption10').innerHTML = "Deogarh";
    document.getElementById('coption11').innerHTML = "Dhenkanal";
    document.getElementById('coption12').innerHTML = "Gajapati";
    document.getElementById('coption13').innerHTML = "Ganjam";
    document.getElementById('coption14').innerHTML = "Jagatsinghapur";
    document.getElementById('coption15').innerHTML = "Jajpur";
    document.getElementById('coption16').innerHTML = "Jharsuguda";
    document.getElementById('coption17').innerHTML = "Kalahandi";
    document.getElementById('coption18').innerHTML = "Kandhamal";
    document.getElementById('coption19').innerHTML = "Kendrapara";
    document.getElementById('coption20').innerHTML = "Kendujhar";
    document.getElementById('coption21').innerHTML = "Khordha";
    document.getElementById('coption22').innerHTML = "Koraput";
    document.getElementById('coption23').innerHTML = "Malkangiri";
    document.getElementById('coption24').innerHTML = "Mayurbhanj";
    document.getElementById('coption25').innerHTML = "Nabarangpur";
    document.getElementById('coption26').innerHTML = "Nayagarh";
    document.getElementById('coption27').innerHTML = "Nuapada";
    document.getElementById('coption28').innerHTML = "Puri";
    document.getElementById('coption29').innerHTML = "Rayagada";
    document.getElementById('coption30').innerHTML = "Sambalpur";
    document.getElementById('coption31').innerHTML = "Sonepur";
    document.getElementById('coption32').innerHTML = "Sundargarh";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption29() {
    StateBox.value="Punjab";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Amritsar";
    document.getElementById('coption2').innerHTML = "Ludhiana";
    document.getElementById('coption3').innerHTML = "Jalandhar";
    document.getElementById('coption4').innerHTML = "Patiala";
    document.getElementById('coption5').innerHTML = "Barnala";
    document.getElementById('coption6').innerHTML = "Bathinda";
    document.getElementById('coption7').innerHTML = "Faridkot";
    document.getElementById('coption8').innerHTML = "Fatehgarh Sahib";
    document.getElementById('coption9').innerHTML = "Fazilka";
    document.getElementById('coption10').innerHTML = "Ferozepur";
    document.getElementById('coption11').innerHTML = "Gurdaspur";
    document.getElementById('coption12').innerHTML = "Hoshiarpur";
    document.getElementById('coption13').innerHTML = "Kapurthala";
    document.getElementById('coption14').innerHTML = "Mansa";
    document.getElementById('coption15').innerHTML = "Moga";
    document.getElementById('coption16').innerHTML = "Muktsar";
    document.getElementById('coption17').innerHTML = "Nawanshahr";
    document.getElementById('coption18').innerHTML = "Pathankot";
    document.getElementById('coption19').innerHTML = "Rupnagar";
    document.getElementById('coption20').innerHTML = "Mohali";
    document.getElementById('coption21').innerHTML = "Sangrur";
    document.getElementById('coption22').innerHTML = "Tarn Taran";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption30() {
    StateBox.value="Puducherry";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Puducherry";
    document.getElementById('coption2').innerHTML = "Karaikal";
    document.getElementById('coption3').innerHTML = "Mahe";
    document.getElementById('coption4').innerHTML = "Yanam";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption31() {
    StateBox.value="Rajasthan";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Jaipur";
    document.getElementById('coption2').innerHTML = "Kota";
    document.getElementById('coption3').innerHTML = "Jodhpur";
    document.getElementById('coption4').innerHTML = "Bikaner";
    document.getElementById('coption5').innerHTML = "Ajmer";
    document.getElementById('coption6').innerHTML = "Jaisalmer";
    document.getElementById('coption7').innerHTML = "Udaipur";
    document.getElementById('coption8').innerHTML = "Alwar";
    document.getElementById('coption9').innerHTML = "Banswara";
    document.getElementById('coption10').innerHTML = "Baran";
    document.getElementById('coption11').innerHTML = "Barmer";
    document.getElementById('coption12').innerHTML = "Bharatpur";
    document.getElementById('coption13').innerHTML = "Bhilwara";
    document.getElementById('coption14').innerHTML = "Bundi";
    document.getElementById('coption15').innerHTML = "Chittorgarh";
    document.getElementById('coption16').innerHTML = "Churu";
    document.getElementById('coption17').innerHTML = "Dausa";
    document.getElementById('coption18').innerHTML = "Dholpur";
    document.getElementById('coption19').innerHTML = "Dungarpur";
    document.getElementById('coption20').innerHTML = "Hanumangarh";
    document.getElementById('coption21').innerHTML = "Jalore";
    document.getElementById('coption22').innerHTML = "Jhalawar";
    document.getElementById('coption23').innerHTML = "Jhunjhunu";
    document.getElementById('coption24').innerHTML = "Karauli";
    document.getElementById('coption25').innerHTML = "Nagaur";
    document.getElementById('coption26').innerHTML = "Pali";
    document.getElementById('coption27').innerHTML = "Pratapgarh";
    document.getElementById('coption28').innerHTML = "Rajsamand";
    document.getElementById('coption29').innerHTML = "Sawai Madhopur";
    document.getElementById('coption30').innerHTML = "Sikar";
    document.getElementById('coption31').innerHTML = "Sirohi";
    document.getElementById('coption32').innerHTML = "Sri Ganganagar";
    document.getElementById('coption33').innerHTML = "Tonk";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption32() {
    StateBox.value="Sikkim";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Gangtok";
    document.getElementById('coption2').innerHTML = "Pelling";
    document.getElementById('coption3').innerHTML = "Majitar";
    document.getElementById('coption4').innerHTML = "Mangan";
    document.getElementById('coption5').innerHTML = "East Sikkim";
    document.getElementById('coption6').innerHTML = "North Sikkim";
    document.getElementById('coption7').innerHTML = "South Sikkim";
    document.getElementById('coption8').innerHTML = "West Sikkim";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption33() {
    StateBox.value="Tamil Nadu";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Chennai";
    document.getElementById('coption2').innerHTML = "Coimbatore";
    document.getElementById('coption3').innerHTML = "Madurai";
    document.getElementById('coption4').innerHTML = "Tiruchirappalli";
    document.getElementById('coption5').innerHTML = "Ariyalur";
    document.getElementById('coption6').innerHTML = "Chengalpattu";
    document.getElementById('coption7').innerHTML = "Cuddalore";
    document.getElementById('coption8').innerHTML = "Dharmapuri";
    document.getElementById('coption9').innerHTML = "Dindigul";
    document.getElementById('coption10').innerHTML = "Erode";
    document.getElementById('coption11').innerHTML = "Kallakurichi";
    document.getElementById('coption12').innerHTML = "Kanchipuram";
    document.getElementById('coption13').innerHTML = "Kanyakumari";
    document.getElementById('coption14').innerHTML = "Karur";
    document.getElementById('coption15').innerHTML = "Krishnagiri";
    document.getElementById('coption16').innerHTML = "Nagapattinam";
    document.getElementById('coption17').innerHTML = "Namakkal";
    document.getElementById('coption18').innerHTML = "Nilgiris";
    document.getElementById('coption19').innerHTML = "Perambalur";
    document.getElementById('coption20').innerHTML = "Pudukkottai";
    document.getElementById('coption21').innerHTML = "Ramanathapuram";
    document.getElementById('coption22').innerHTML = "Ranipet";
    document.getElementById('coption23').innerHTML = "Salem";
    document.getElementById('coption24').innerHTML = "Sivaganga";
    document.getElementById('coption25').innerHTML = "Tenkasi";
    document.getElementById('coption26').innerHTML = "Thanjavur";
    document.getElementById('coption27').innerHTML = "Theni";
    document.getElementById('coption28').innerHTML = "Thoothukudi";
    document.getElementById('coption29').innerHTML = "Tirunelveli";
    document.getElementById('coption30').innerHTML = "Tirupathur";
    document.getElementById('coption31').innerHTML = "Tiruppur";
    document.getElementById('coption32').innerHTML = "Tiruvallur";
    document.getElementById('coption33').innerHTML = "Tiruvannamalai";
    document.getElementById('coption34').innerHTML = "Tiruvarur";
    document.getElementById('coption35').innerHTML = "Vellore";
    document.getElementById('coption36').innerHTML = "Viluppuram";
    document.getElementById('coption37').innerHTML = "Virudhunagar";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption34() {
    StateBox.value="Telangana";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Hyderabad";
    document.getElementById('coption2').innerHTML = "Warangal";
    document.getElementById('coption3').innerHTML = "Nizamabad";
    document.getElementById('coption4').innerHTML = "Adilabad";
    document.getElementById('coption5').innerHTML = "Bhadradri";
    document.getElementById('coption6').innerHTML = "Jagtial";
    document.getElementById('coption7').innerHTML = "Jangaon";
    document.getElementById('coption8').innerHTML = "Jayashankar";
    document.getElementById('coption9').innerHTML = "Jogulamba Gadwal";
    document.getElementById('coption10').innerHTML = "Kamareddy";
    document.getElementById('coption11').innerHTML = "Karimnagar";
    document.getElementById('coption12').innerHTML = "Khammam";
    document.getElementById('coption13').innerHTML = "Komaram";
    document.getElementById('coption14').innerHTML = "Mahabubabad";
    document.getElementById('coption15').innerHTML = "Mahabubnagar";
    document.getElementById('coption16').innerHTML = "Mancherial";
    document.getElementById('coption17').innerHTML = "Medak";
    document.getElementById('coption18').innerHTML = "Medchal";
    document.getElementById('coption19').innerHTML = "Nagarkurnool";
    document.getElementById('coption20').innerHTML = "Nalgonda";
    document.getElementById('coption21').innerHTML = "Nirmal";
    document.getElementById('coption22').innerHTML = "Peddapalli";
    document.getElementById('coption23').innerHTML = "Rangareddy";
    document.getElementById('coption24').innerHTML = "Sangareddy";
    document.getElementById('coption25').innerHTML = "Siddipet";
    document.getElementById('coption26').innerHTML = "Suryapet";
    document.getElementById('coption27').innerHTML = "Vikarabad";
    document.getElementById('coption28').innerHTML = "Wanaparthy";
    document.getElementById('coption29').innerHTML = "Warangal Rural";
    document.getElementById('coption30').innerHTML = "Yadadri";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption35() {
    StateBox.value="Tripura";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Agartala";
    document.getElementById('coption2').innerHTML = "Dhalai";
    document.getElementById('coption3').innerHTML = "Gomati";
    document.getElementById('coption4').innerHTML = "Khowai";
    document.getElementById('coption5').innerHTML = "North Tripura";
    document.getElementById('coption6').innerHTML = "Sepahijala";
    document.getElementById('coption7').innerHTML = "South Tripura";
    document.getElementById('coption8').innerHTML = "Unakoti";
    document.getElementById('coption9').innerHTML = "West Tripura";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption36() {
    StateBox.value="Uttarakhand";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Dehradun";
    document.getElementById('coption2').innerHTML = "Haldwani";
    document.getElementById('coption3').innerHTML = "Almora";
    document.getElementById('coption4').innerHTML = "Bageshwar";
    document.getElementById('coption5').innerHTML = "Chamoli";
    document.getElementById('coption6').innerHTML = "Champawat";
    document.getElementById('coption7').innerHTML = "Haridwar";
    document.getElementById('coption8').innerHTML = "Nainital";
    document.getElementById('coption9').innerHTML = "Pauri Garhwal";
    document.getElementById('coption10').innerHTML = "Pithoragarh";
    document.getElementById('coption11').innerHTML = "Rudraprayag";
    document.getElementById('coption12').innerHTML = "Tehri Garhwal";
    document.getElementById('coption13').innerHTML = "Uttarkashi";
    CityOptionsLoad();
    CityBox.readOnly = true;
}
function SOption37() {
    StateBox.value="West Bengal";
    SoptionSelected();
    document.getElementById('coption1').innerHTML = "Kolkata";
    document.getElementById('coption2').innerHTML = "Asansol";
    document.getElementById('coption3').innerHTML = "Siliguri";
    document.getElementById('coption4').innerHTML = "Durgapur";
    document.getElementById('coption5').innerHTML = "Alipurduar";
    document.getElementById('coption6').innerHTML = "Bankura";
    document.getElementById('coption7').innerHTML = "Birbhum";
    document.getElementById('coption8').innerHTML = "Cooch Behar";
    document.getElementById('coption9').innerHTML = "South Dinajpur";
    document.getElementById('coption10').innerHTML = "Darjeeling";
    document.getElementById('coption11').innerHTML = "Hooghly";
    document.getElementById('coption12').innerHTML = "Howrah";
    document.getElementById('coption13').innerHTML = "Jalpaiguri";
    document.getElementById('coption14').innerHTML = "Jhargram";
    document.getElementById('coption15').innerHTML = "Kalimpong";
    document.getElementById('coption16').innerHTML = "Malda";
    document.getElementById('coption17').innerHTML = "Murshidabad";
    document.getElementById('coption18').innerHTML = "Nadia";
    document.getElementById('coption19').innerHTML = "North 24 Parganas";
    document.getElementById('coption20').innerHTML = "West Medinipur";
    document.getElementById('coption21').innerHTML = "West Bardhaman";
    document.getElementById('coption22').innerHTML = "Purba Burdwan";
    document.getElementById('coption23').innerHTML = "Purba Medinipur";
    document.getElementById('coption24').innerHTML = "Purulia";
    document.getElementById('coption25').innerHTML = "South 24 Parganas";
    document.getElementById('coption26').innerHTML = "Uttar Dinajpur";
    CityOptionsLoad();
    CityBox.readOnly = true;
}


function CityBoxOpen() {
    if(CityOptions.classList.contains('hidden')) {
        CityBox.readOnly = false;
        CityBox.classList.remove('adm_city_text_active');
        CityBox.classList.add('adm_city_text');
    }
    else {
        CityBox.readOnly = true;
        CityBox.classList.remove('adm_city_text');
        CityBox.classList.add('adm_city_text_active');
        CityOptions.classList.remove('city_options_hider');
        CityOptions.classList.add('city_options');
        CityOptions.classList.add('show');
        CityOption.classList.remove('city_option_container_hider');
        CityOption.classList.add('city_option_container');
    }
    GenderBoxClose();
    DOBBoxClose();
    MediumBoxClose();
    CourseTypeBoxClose();
    ReligionBoxClose();
    CategoryBoxClose();
    NationalityBoxClose();
    StateBoxClose();
}

function CityBoxClose() {
    CityOptions.classList.remove('show');
    CityBox.classList.add('adm_city_text');
    if(CityBox.value==="") {
    	CityBox.classList.remove('adm_city_text_active');
    }
    else {
    	CityBox.classList.add('adm_city_text_active');
    }
}

function CDoptionSelected() {
    CityOptions.classList.remove('city_options');
    CityOptions.classList.add('city_options_hider');
    CityOption.classList.remove('city_option_container');
    CityOption.classList.add('city_option_container_hider');
    CityOptions.classList.remove('show');
}

function CDOption1() {
    CityBox.value = document.getElementById('coption1').textContent;
    CDoptionSelected();
}
function CDOption2() {
    CityBox.value = document.getElementById('coption2').textContent;
    CDoptionSelected();
}
function CDOption3() {
    CityBox.value = document.getElementById('coption3').textContent;
    CDoptionSelected();
}
function CDOption4() {
    CityBox.value = document.getElementById('coption4').textContent;
    CDoptionSelected();
}
function CDOption5() {
    CityBox.value = document.getElementById('coption5').textContent;
    CDoptionSelected();
}
function CDOption6() {
    CityBox.value = document.getElementById('coption6').textContent;
    CDoptionSelected();
}
function CDOption7() {
    CityBox.value = document.getElementById('coption7').textContent;
    CDoptionSelected();
}
function CDOption8() {
    CityBox.value = document.getElementById('coption8').textContent;
    CDoptionSelected();
}
function CDOption9() {
    CityBox.value = document.getElementById('coption9').textContent;
    CDoptionSelected();
}
function CDOption10() {
    CityBox.value = document.getElementById('coption10').textContent;
    CDoptionSelected();
}
function CDOption11() {
    CityBox.value = document.getElementById('coption11').textContent;
    CDoptionSelected();
}
function CDOption12() {
    CityBox.value = document.getElementById('coption12').textContent;
    CDoptionSelected();
}
function CDOption13() {
    CityBox.value = document.getElementById('coption13').textContent;
    CDoptionSelected();
}
function CDOption14() {
    CityBox.value = document.getElementById('coption14').textContent;
    CDoptionSelected();
}
function CDOption15() {
    CityBox.value = document.getElementById('coption15').textContent;
    CDoptionSelected();
}
function CDOption16() {
    CityBox.value = document.getElementById('coption16').textContent;
    CDoptionSelected();
}
function CDOption17() {
    CityBox.value = document.getElementById('coption17').textContent;
    CDoptionSelected();
}
function CDOption18() {
    CityBox.value = document.getElementById('coption18').textContent;
    CDoptionSelected();
}
function CDOption19() {
    CityBox.value = document.getElementById('coption19').textContent;
    CDoptionSelected();
}
function CDOption20() {
    CityBox.value = document.getElementById('coption20').textContent;
    CDoptionSelected();
}
function CDOption21() {
    CityBox.value = document.getElementById('coption21').textContent;
    CDoptionSelected();
}
function CDOption22() {
    CityBox.value = document.getElementById('coption22').textContent;
    CDoptionSelected();
}
function CDOption23() {
    CityBox.value = document.getElementById('coption23').textContent;
    CDoptionSelected();
}
function CDOption24() {
    CityBox.value = document.getElementById('coption24').textContent;
    CDoptionSelected();
}
function CDOption25() {
    CityBox.value = document.getElementById('coption25').textContent;
    CDoptionSelected();
}
function CDOption26() {
    CityBox.value = document.getElementById('coption26').textContent;
    CDoptionSelected();
}
function CDOption27() {
    CityBox.value = document.getElementById('coption27').textContent;
    CDoptionSelected();
}
function CDOption28() {
    CityBox.value = document.getElementById('coption28').textContent;
    CDoptionSelected();
}
function CDOption29() {
    CityBox.value = document.getElementById('coption29').textContent;
    CDoptionSelected();
}
function CDOption30() {
    CityBox.value = document.getElementById('coption30').textContent;
    CDoptionSelected();
}
function CDOption31() {
    CityBox.value = document.getElementById('coption31').textContent;
    CDoptionSelected();
}
function CDOption32() {
    CityBox.value = document.getElementById('coption32').textContent;
    CDoptionSelected();
}
function CDOption33() {
    CityBox.value = document.getElementById('coption33').textContent;
    CDoptionSelected();
}
function CDOption34() {
    CityBox.value = document.getElementById('coption34').textContent;
    CDoptionSelected();
}
function CDOption35() {
    CityBox.value = document.getElementById('coption35').textContent;
    CDoptionSelected();
}
function CDOption36() {
    CityBox.value = document.getElementById('coption36').textContent;
    CDoptionSelected();
}
function CDOption37() {
    CityBox.value = document.getElementById('coption37').textContent;
    CDoptionSelected();
}
function CDOption38() {
    CityBox.value = document.getElementById('coption38').textContent;
    CDoptionSelected();
}
function CDOption39() {
    CityBox.value = document.getElementById('coption39').textContent;
    CDoptionSelected();
}
function CDOption40() {
    CityBox.value = document.getElementById('coption40').textContent;
    CDoptionSelected();
}
function CDOption41() {
    CityBox.value = document.getElementById('coption41').textContent;
    CDoptionSelected();
}
function CDOption42() {
    CityBox.value = document.getElementById('coption42').textContent;
    CDoptionSelected();
}
function CDOption43() {
    CityBox.value = document.getElementById('coption43').textContent;
    CDoptionSelected();
}
function CDOption44() {
    CityBox.value = document.getElementById('coption44').textContent;
    CDoptionSelected();
}
function CDOption45() {
    CityBox.value = document.getElementById('coption45').textContent;
    CDoptionSelected();
}
function CDOption46() {
    CityBox.value = document.getElementById('coption46').textContent;
    CDoptionSelected();
}
function CDOption47() {
    CityBox.value = document.getElementById('coption47').textContent;
    CDoptionSelected();
}
function CDOption48() {
    CityBox.value = document.getElementById('coption48').textContent;
    CDoptionSelected();
}
function CDOption49() {
    CityBox.value = document.getElementById('coption49').textContent;
    CDoptionSelected();
}
function CDOption50() {
    CityBox.value = document.getElementById('coption50').textContent;
    CDoptionSelected();
}
function CDOption51() {
    CityBox.value = document.getElementById('coption51').textContent;
    CDoptionSelected();
}
function CDOption52() {
    CityBox.value = document.getElementById('coption52').textContent;
    CDoptionSelected();
}
function CDOption53() {
    CityBox.value = document.getElementById('coption53').textContent;
    CDoptionSelected();
}
function CDOption54() {
    CityBox.value = document.getElementById('coption54').textContent;
    CDoptionSelected();
}
function CDOption55() {
    CityBox.value = document.getElementById('coption55').textContent;
    CDoptionSelected();
}
function CDOption56() {
    CityBox.value = document.getElementById('coption56').textContent;
    CDoptionSelected();
}
function CDOption57() {
    CityBox.value = document.getElementById('coption57').textContent;
    CDoptionSelected();
}
function CDOption58() {
    CityBox.value = document.getElementById('coption58').textContent;
    CDoptionSelected();
}
function CDOption59() {
    CityBox.value = document.getElementById('coption59').textContent;
    CDoptionSelected();
}
function CDOption60() {
    CityBox.value = document.getElementById('coption60').textContent;
    CDoptionSelected();
}
function CDOption61() {
    CityBox.value = document.getElementById('coption61').textContent;
    CDoptionSelected();
}
function CDOption62() {
    CityBox.value = document.getElementById('coption62').textContent;
    CDoptionSelected();
}
function CDOption63() {
    CityBox.value = document.getElementById('coption63').textContent;
    CDoptionSelected();
}
function CDOption64() {
    CityBox.value = document.getElementById('coption64').textContent;
    CDoptionSelected();
}
function CDOption65() {
    CityBox.value = document.getElementById('coption65').textContent;
    CDoptionSelected();
}
function CDOption66() {
    CityBox.value = document.getElementById('coption66').textContent;
    CDoptionSelected();
}
function CDOption67() {
    CityBox.value = document.getElementById('coption67').textContent;
    CDoptionSelected();
}
function CDOption68() {
    CityBox.value = document.getElementById('coption68').textContent;
    CDoptionSelected();
}
function CDOption69() {
    CityBox.value = document.getElementById('coption69').textContent;
    CDoptionSelected();
}
function CDOption70() {
    CityBox.value = document.getElementById('coption70').textContent;
    CDoptionSelected();
}
function CDOption71() {
    CityBox.value = document.getElementById('coption71').textContent;
    CDoptionSelected();
}
function CDOption72() {
    CityBox.value = document.getElementById('coption72').textContent;
    CDoptionSelected();
}
function CDOption73() {
    CityBox.value = document.getElementById('coption73').textContent;
    CDoptionSelected();
}
function CDOption74() {
    CityBox.value = document.getElementById('coption74').textContent;
    CDoptionSelected();
}
function CDOption75() {
    CityBox.value = document.getElementById('coption75').textContent;
    CDoptionSelected();
}
function CDOption76() {
    CityBox.value = document.getElementById('coption76').textContent;
    CDoptionSelected();
}


function CheckBoxCheck() {
    if(UGFields.classList.contains('hidden')) {
        if($('#file')[0].files.length !== 0 && FirstNameBox.value !== "" && LastNameBox.value !== "" && GenderBox.value !== "" && EmailBox.value !== "" && DOBBox.value !== "" && PhoneBox.value !== "" && FathersNameBox.value !== "" && MothersNameBox.value !== "" && MediumBox.value !== "" && CourseTypeBox.value !== "" && ReligionBox.value !== "" && CategoryBox.value !== "" && AddressBox.value !== "" && NationalityBox.value !== "" && StateBox.value !== "" && CityBox.value !== "" && PincodeBox.value !== "" && Rollno10Box.value !== "" && Percentage10Box.value !== "" && Board10Box.value !== "" && School10Box.value !== "" && Rollno12Box.value !== "" && Percentage12Box.value !== "" && Board12Box.value !== "" && School12Box.value !== "") {
            if(CheckBox.classList.contains('adm_checkbox_checked')) {
                CheckBox.classList.remove('adm_checkbox_checked');
                CheckBox.classList.add('adm_checkbox');
                CheckBoxCheck1.classList.add('hidden');
                CheckBoxCheck2.classList.add('hidden');
                CheckBoxOG.checked = false;
            }
            else {
                CheckBox.classList.remove('adm_checkbox');
                CheckBox.classList.add('adm_checkbox_checked');
                CheckBoxCheck1.classList.remove('hidden');
                CheckBoxCheck2.classList.remove('hidden');
                CheckBoxOG.checked = true;
            }
        }
        else {
            alert('Please fill all of the Mandatory Fields.');
        }
    }
    else {
        if($('#file')[0].files.length !== 0 && FirstNameBox.value !== "" && LastNameBox.value !== "" && GenderBox.value !== "" && EmailBox.value !== "" && DOBBox.value !== "" && PhoneBox.value !== "" && FathersNameBox.value !== "" && MothersNameBox.value !== "" && MediumBox.value !== "" && CourseTypeBox.value !== "" && ReligionBox.value !== "" && CategoryBox.value !== "" && AddressBox.value !== "" && NationalityBox.value !== "" && StateBox.value !== "" && CityBox.value !== "" && PincodeBox.value !== "" && Rollno10Box.value !== "" && Percentage10Box.value !== "" && Board10Box.value !== "" && School10Box.value !== "" && Rollno12Box.value !== "" && Percentage12Box.value !== "" && Board12Box.value !== "" && School12Box.value !== "" && ClassUGBox.value !== "" && RollnoUGBox.value !== "" && PercentageUGBox.value !== "" && BoardUGBox.value !== "" && SchoolUGBox.value !== "") {
            if(CheckBox.classList.contains('adm_checkbox_checked')) {
                CheckBox.classList.remove('adm_checkbox_checked');
                CheckBox.classList.add('adm_checkbox');
                CheckBoxCheck1.classList.add('hidden');
                CheckBoxCheck2.classList.add('hidden');
                CheckBoxOG.checked = false;
            }
            else {
                CheckBox.classList.remove('adm_checkbox');
                CheckBox.classList.add('adm_checkbox_checked');
                CheckBoxCheck1.classList.remove('hidden');
                CheckBoxCheck2.classList.remove('hidden');
                CheckBoxOG.checked = true;
            }
        }
        else {
            alert('Please fill all of the Mandatory Fields.');
        }
    }
}

function CheckBoxCheckTwo() {
    if(UGFields.classList.contains('hidden')) {
        if($('#doc_10')[0].files.length !== 0 && $('#doc_12')[0].files.length !== 0 && $('#doc_DM')[0].files.length !== 0) {
            if(CheckBox2.classList.contains('adm_checkbox_checked')) {
                CheckBox2.classList.remove('adm_checkbox_checked');
                CheckBox2.classList.add('adm_checkbox');
                CheckBoxCheck12.classList.add('hidden');
                CheckBoxCheck22.classList.add('hidden');
                CheckBoxOG2.checked = false;
            }
            else {
                CheckBox2.classList.remove('adm_checkbox');
                CheckBox2.classList.add('adm_checkbox_checked');
                CheckBoxCheck12.classList.remove('hidden');
                CheckBoxCheck22.classList.remove('hidden');
                CheckBoxOG2.checked = true;
            }
        }
        else {
            alert('Please upload all the required Documents.');
        }
    }
    else {
        if($('#doc_10')[0].files.length !== 0 && $('#doc_12')[0].files.length !== 0 && $('#doc_UG')[0].files.length !== 0 && $('#doc_DM')[0].files.length !== 0) {
            if(CheckBox2.classList.contains('adm_checkbox_checked')) {
                CheckBox2.classList.remove('adm_checkbox_checked');
                CheckBox2.classList.add('adm_checkbox');
                CheckBoxCheck12.classList.add('hidden');
                CheckBoxCheck22.classList.add('hidden');
                CheckBoxOG2.checked = false;
            }
            else {
                CheckBox2.classList.remove('adm_checkbox');
                CheckBox2.classList.add('adm_checkbox_checked');
                CheckBoxCheck12.classList.remove('hidden');
                CheckBoxCheck22.classList.remove('hidden');
                CheckBoxOG2.checked = true;
            }
        }
        else {
            alert('Please upload all the required Documents.');
        }
    }
}

function CheckBoxCheckThree() {
    if(RadioButton1.classList.contains('adm_radio_button_active')) {
        if($('#receipt')[0].files.length !== 0 && TransactionID.value !== "") {
            if(CheckBox3.classList.contains('adm_checkbox_checked')) {
                CheckBox3.classList.remove('adm_checkbox_checked');
                CheckBox3.classList.add('adm_checkbox');
                CheckBoxCheck13.classList.add('hidden');
                CheckBoxCheck23.classList.add('hidden');
                CheckBoxOG3.checked = false;
            }
            else {
                CheckBox3.classList.remove('adm_checkbox');
                CheckBox3.classList.add('adm_checkbox_checked');
                CheckBoxCheck13.classList.remove('hidden');
                CheckBoxCheck23.classList.remove('hidden');
                CheckBoxOG3.checked = true;
            }
        }
        else {
            alert('Please Enter Transaction ID and attach Payment Receipt.');
        }
    }
    else if(RadioButton2.classList.contains('adm_radio_button_active')) {
        if(CheckBox3.classList.contains('adm_checkbox_checked')) {
            CheckBox3.classList.remove('adm_checkbox_checked');
            CheckBox3.classList.add('adm_checkbox');
            CheckBoxCheck13.classList.add('hidden');
            CheckBoxCheck23.classList.add('hidden');
            CheckBoxOG3.checked = false;
        }
        else {
            CheckBox3.classList.remove('adm_checkbox');
            CheckBox3.classList.add('adm_checkbox_checked');
            CheckBoxCheck13.classList.remove('hidden');
            CheckBoxCheck23.classList.remove('hidden');
            CheckBoxOG3.checked = true;
        }
    }
    else {
        alert('Please choose a Payment Mode.');
    }
}



function PRadio1() {
    RadioButtonOG1.checked = true;
    RadioFiller1.classList.remove('hidden');
    RadioFiller2.classList.add('hidden');
    RadioButton1.classList.remove('adm_radio_button');
    RadioButton1.classList.add('adm_radio_button_active');
    RadioButton2.classList.remove('adm_radio_button_active');
    RadioButton2.classList.add('adm_radio_button');
    PaymentMode2.classList.remove('adm_payment_mode_active');
    PaymentMode2.classList.add('adm_payment_mode');
    PaymentMode1.classList.remove('adm_payment_mode');
    PaymentMode1.classList.add('adm_payment_mode_active');
    document.getElementById('payment_online_mode_desc').classList.remove('hidden');
    document.getElementById('payment_offline_mode_desc').classList.add('hidden');
    document.getElementById('transaction_id').required = true;
}

function PRadio2() {
    RadioButtonOG2.checked = true;
    RadioFiller2.classList.remove('hidden');
    RadioFiller1.classList.add('hidden');
    RadioButton2.classList.remove('adm_radio_button');
    RadioButton2.classList.add('adm_radio_button_active');
    RadioButton1.classList.remove('adm_radio_button_active');
    RadioButton1.classList.add('adm_radio_button');
    PaymentMode1.classList.remove('adm_payment_mode_active');
    PaymentMode1.classList.add('adm_payment_mode');
    PaymentMode2.classList.remove('adm_payment_mode');
    PaymentMode2.classList.add('adm_payment_mode_active');
    document.getElementById('payment_offline_mode_desc').classList.remove('hidden');
    document.getElementById('payment_online_mode_desc').classList.add('hidden');
    document.getElementById('transaction_id').required = false;
}

function UploadBtnDialog() {
    UploadBtnOG.click();
}

var loadFile = function(event) {
    // Check if any file is selected.
    if (event.target.files.length > 0) {
        for (const i = 0; i <= event.target.files.length - 1; i++) {

            const fsize = event.target.files.item(i).size;
            const file = Math.round((fsize / 1024));
            // The size of the file.
            if (file > 2048) {
                alert(
                    "Your Image is larger than 2MB in size. Please choose another one.");
            }
            else {
                var image = document.getElementById('output');
                var image2 = document.getElementById('psp_review_output');
                image.src = URL.createObjectURL(event.target.files[0]);
                image2.src = URL.createObjectURL(event.target.files[0]);
                PSP.classList.remove('hidden');
                UploadHide.classList.add('hidden');
                setTimeout(function () {
                    ChangeShow.classList.remove('hidden');
                }, 900);
            }
        }
    }
};

function UploadDoc10Dialog() {
    UploadDoc10OG.click();
}

var loadFile2 = function(event) {
    // Check if any file is selected.
    if (event.target.files.length > 0) {
        for (const i = 0; i <= event.target.files.length - 1; i++) {

            const fsize = event.target.files.item(i).size;
            const file = Math.round((fsize / 1024));
            // The size of the file.
            if (file > 6144) {
                alert(
                    "Your Document is larger than 6MB in size. Please choose another one.");
            }
            else {
                var image = document.getElementById('output_doc10');
                var image2 = document.getElementById('review_output_doc10');
                image.src = URL.createObjectURL(event.target.files[0]);
                image2.src = URL.createObjectURL(event.target.files[0]);
                document.getElementById('doc_container').classList.remove('hidden');
                document.getElementById('ud_upload_change_before').classList.add('hidden');
                document.getElementById('ud_upload_change_after').classList.remove('hidden');
            }
        }
    }
};

function UploadDoc12Dialog() {
    UploadDoc12OG.click();
}


var loadFile3 = function(event) {
    // Check if any file is selected.
    if (event.target.files.length > 0) {
        for (const i = 0; i <= event.target.files.length - 1; i++) {

            const fsize = event.target.files.item(i).size;
            const file = Math.round((fsize / 1024));
            // The size of the file.
            if (file > 6144) {
                alert(
                    "Your Document is larger than 6MB in size. Please choose another one.");
            }
            else {
                var image = document.getElementById('output_doc12');
                var image2 = document.getElementById('review_output_doc12');
                image.src = URL.createObjectURL(event.target.files[0]);
                image2.src = URL.createObjectURL(event.target.files[0]);
                document.getElementById('doc_container2').classList.remove('hidden');
                document.getElementById('ud_upload_change_before2').classList.add('hidden');
                document.getElementById('ud_upload_change_after2').classList.remove('hidden');
            }
        }
    }
};

function UploadDocDMDialog() {
    UploadDocDMOG.click();
}

var loadFile4 = function(event) {
    // Check if any file is selected.
    if (event.target.files.length > 0) {
        for (const i = 0; i <= event.target.files.length - 1; i++) {

            const fsize = event.target.files.item(i).size;
            const file = Math.round((fsize / 1024));
            // The size of the file.
            if (file > 6144) {
                alert(
                    "Your Document is larger than 6MB in size. Please choose another one.");
            }
            else {
                var image = document.getElementById('output_docDM');
                var image2 = document.getElementById('review_output_docDM');
                image.src = URL.createObjectURL(event.target.files[0]);
                image2.src = URL.createObjectURL(event.target.files[0]);
                document.getElementById('doc_container3').classList.remove('hidden');
                document.getElementById('ud_upload_change_before3').classList.add('hidden');
                document.getElementById('ud_upload_change_after3').classList.remove('hidden');
            }
        }
    }
};

function UploadDocUGDialog() {
    if(!UGFields.classList.contains('hidden')) {
        UploadDocUGOG.click();
    }
}

var loadFile6 = function(event) {
    // Check if any file is selected.
    if (event.target.files.length > 0) {
        for (const i = 0; i <= event.target.files.length - 1; i++) {

            const fsize = event.target.files.item(i).size;
            const file = Math.round((fsize / 1024));
            // The size of the file.
            if (file > 6144) {
                alert(
                    "Your Document is larger than 6MB in size. Please choose another one.");
            }
            else {
                var image = document.getElementById('output_docUG');
                var image2 = document.getElementById('review_output_docUG');
                image.src = URL.createObjectURL(event.target.files[0]);
                image2.src = URL.createObjectURL(event.target.files[0]);
                document.getElementById('doc_containerug').classList.remove('hidden');
                document.getElementById('ud_upload_change_beforeug').classList.add('hidden');
                document.getElementById('ud_upload_change_afterug').classList.remove('hidden');
            }
        }
    }
};


var input = document.getElementById('receipt');
var infoArea = document.getElementById( 'file-attach-filename' );

var loadFile5 = function(event) {
    var input = event.srcElement;
  
  // the input has an array of files in the `files` property, each one has a name that you can use. We're just using the name here.
  var fileName = input.files[0].name;
  
  // use fileName however fits your app best, i.e. add it into a div
  infoArea.textContent = fileName;
};

function AttachReceipt() {
    document.getElementById('receipt').click();
}


function copy() {
    document.getElementById('copied').classList.add('hidden');
    var copyText = document.getElementById("payment_acc_details");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    document.getElementById('copied').classList.remove('hidden');
}


//var hook = true;
//  window.onbeforeunload = function() {
//    if (hook) {
//      return "Did you save your stuff?"
//    }
//  }
//  function unhook() {
//    hook=false;
//  }


function goBack() {
    window.history.back();
}

FirstName = FirstNameBox;
FirstName2 = FirstNameReviewBox;

LastName = LastNameBox;
LastName2 = LastNameReviewBox;

Gender = GenderBox;
Gender2 = GenderReviewBox;

Email = EmailBox;
Email2 = EmailReviewBox;

DOB = DOBBox;
DOB2 = DOBReviewBox;

Phone = PhoneBox;
Phone2 = PhoneReviewBox;

FathersName = FathersNameBox;
FathersName2 = FathersNameReviewBox;

MothersName = MothersNameBox;
MothersName2 = MothersNameReviewBox;

Medium = MediumBox;
Medium2 = MediumReviewBox;

CourseType = CourseTypeBox;
CourseType2 = CourseTypeReviewBox;

Religion = ReligionBox;
Religion2 = ReligionReviewBox;

Category = CategoryBox;
Category2 = CategoryReviewBox;

Address = AddressBox;
Address2 = AddressReviewBox;

Nationality = NationalityBox;
Nationality2 = NationalityReviewBox;

State = StateBox;
State2 = StateReviewBox;

City = CityBox;
City2 = CityReviewBox;

Pincode = PincodeBox;
Pincode2 = PincodeReviewBox;

Rollno10 = Rollno10Box;
Rollno102 = Rollno10ReviewBox;

Percentage10 = Percentage10Box;
Percentage102 = Percentage10ReviewBox;

Board10 = Board10Box;
Board102 = Board10ReviewBox;

School10 = School10Box;
School102 = School10ReviewBox;

Rollno12 = Rollno12Box;
Rollno122 = Rollno12ReviewBox;

Percentage12 = Percentage12Box;
Percentage122 = Percentage12ReviewBox;

Board12 = Board12Box;
Board122 = Board12ReviewBox;

School12 = School12Box;
School122 = School12ReviewBox;

ClassUG = ClassUGBox;
ClassUG2 = ClassUGReviewBox;

RollnoUG = RollnoUGBox;
RollnoUG2 = RollnoUGReviewBox;

PercentageUG = PercentageUGBox;
PercentageUG2 = PercentageUGReviewBox;

BoardUG = BoardUGBox;
BoardUG2 = BoardUGReviewBox;

SchoolUG = SchoolUGBox;
SchoolUG2 = SchoolUGReviewBox;



window.onclick = function(event) {
    if (!event.target.matches('#gender')) {
      var dropdowns = document.getElementsByClassName("gender_options");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            if(GenderBox.value==="") {
                openDropdown.classList.remove('show');
                GenderBox.classList.remove('adm_gender_text_active');
                GenderBox.classList.add('adm_gender_text');
            }
            else {
                openDropdown.classList.remove('show');
                GenderBox.classList.remove('adm_gender_text');
                GenderBox.classList.add('adm_gender_text_active');
            }
        }
      }
    }
    if (!event.target.matches('#medium')) {
        var dropdowns = document.getElementsByClassName("medium_options");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              if(MediumBox.value==="") {
                  openDropdown.classList.remove('show');
                  MediumBox.classList.remove('adm_medium_text_active');
                  MediumBox.classList.add('adm_medium_text');
              }
              else {
                  openDropdown.classList.remove('show');
                  MediumBox.classList.remove('adm_medium_text');
                  MediumBox.classList.add('adm_medium_text_active');
              }
          }
        }
    }
    if (!event.target.matches('#course_type')) {
        var dropdowns = document.getElementsByClassName("course_type_options");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              if(CourseTypeBox.value==="") {
                  openDropdown.classList.remove('show');
                  CourseTypeBox.classList.remove('adm_course_type_text_active');
                  CourseTypeBox.classList.add('adm_course_type_text');
              }
              else {
                  openDropdown.classList.remove('show');
                  CourseTypeBox.classList.remove('adm_course_type_text');
                  CourseTypeBox.classList.add('adm_course_type_text_active');
              }
          }
        }
    }
    if (!event.target.matches('#religion')) {
        var dropdowns = document.getElementsByClassName("religion_options");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              if(ReligionBox.value==="") {
                  openDropdown.classList.remove('show');
                  ReligionBox.classList.remove('adm_religion_text_active');
                  ReligionBox.classList.add('adm_religion_text');
              }
              else {
                  openDropdown.classList.remove('show');
                  ReligionBox.classList.remove('adm_religion_text');
                  ReligionBox.classList.add('adm_religion_text_active');
              }
          }
        }
    }
    if (!event.target.matches('#category')) {
        var dropdowns = document.getElementsByClassName("category_options");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              if(CategoryBox.value==="") {
                  openDropdown.classList.remove('show');
                  CategoryBox.classList.remove('adm_category_text_active');
                  CategoryBox.classList.add('adm_category_text');
              }
              else {
                  openDropdown.classList.remove('show');
                  CategoryBox.classList.remove('adm_category_text');
                  CategoryBox.classList.add('adm_category_text_active');
              }
          }
        }
    }
    if (!event.target.matches('#nationality')) {
        var dropdowns = document.getElementsByClassName("nationality_options");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              if(NationalityBox.value==="") {
                  openDropdown.classList.remove('show');
                  NationalityBox.classList.remove('adm_nationality_text_active');
                  NationalityBox.classList.add('adm_nationality_text');
              }
              else {
                  openDropdown.classList.remove('show');
                  NationalityBox.classList.remove('adm_nationality_text');
                  NationalityBox.classList.add('adm_nationality_text_active');
              }
          }
        }
    }
    if (!event.target.matches('#state')) {
        var dropdowns = document.getElementsByClassName("state_options");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              if(StateBox.value==="") {
                  openDropdown.classList.remove('show');
                  StateBox.classList.remove('adm_state_text_active');
                  StateBox.classList.add('adm_state_text');
              }
              else {
                  openDropdown.classList.remove('show');
                  StateBox.classList.remove('adm_state_text');
                  StateBox.classList.add('adm_state_text_active');
              }
          }
        }
    }
    if (!event.target.matches('#city')) {
        var dropdowns = document.getElementsByClassName("city_options");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              if(CityBox.value==="") {
                  openDropdown.classList.remove('show');
                  CityBox.classList.remove('adm_city_text_active');
                  CityBox.classList.add('adm_city_text');
              }
              else {
                  openDropdown.classList.remove('show');
                  CityBox.classList.remove('adm_city_text');
                  CityBox.classList.add('adm_city_text_active');
              }
          }
        }
    }
}


window.onload = function() {
    document.getElementById('dob_optiony1').innerHTML = (currentYear-17);
    document.getElementById('dob_optiony2').innerHTML = (currentYear-18);
    document.getElementById('dob_optiony3').innerHTML = (currentYear-19);
    document.getElementById('dob_optiony4').innerHTML = (currentYear-20);
    document.getElementById('dob_optiony5').innerHTML = (currentYear-21);
    document.getElementById('dob_optiony6').innerHTML = (currentYear-22);
    document.getElementById('dob_optiony7').innerHTML = (currentYear-23);
    document.getElementById('dob_optiony8').innerHTML = (currentYear-24);
    document.getElementById('dob_optiony9').innerHTML = (currentYear-25);
    document.getElementById('dob_optiony10').innerHTML = (currentYear-26);
    document.getElementById('dob_optiony11').innerHTML = (currentYear-27);
    document.getElementById('dob_optiony12').innerHTML = (currentYear-28);
    document.getElementById('dob_optiony13').innerHTML = (currentYear-29);
    document.getElementById('dob_optiony14').innerHTML = (currentYear-30);
    document.getElementById('dob_optiony15').innerHTML = (currentYear-31);
    document.getElementById('dob_optiony16').innerHTML = (currentYear-32);
    document.getElementById('dob_optiony17').innerHTML = (currentYear-33);
    document.getElementById('dob_optiony18').innerHTML = (currentYear-34);
    if(TransactionID.value !== "") {
        TransactionID.classList.remove('adm_transaction_id_text');
        TransactionID.classList.add('adm_transaction_id_text_active');
    }
    else {
        TransactionID.classList.remove('adm_transaction_id_text_active');
        TransactionID.classList.add('adm_transaction_id_text');
    }
}
