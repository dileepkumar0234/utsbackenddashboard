@extends('layouts.app')
@section('content') 
@include('includes.header') 
@include('includes.inner_page_title', ['page_title'=>__('Add User')]) 
<div class="page_title_section">
	<div class="page_header">
		<div class="container">
			<div class="row">
				<div class="col-xl-9 col-lg-7 col-md-7 col-12 col-sm-12">
					<h1>Add User</h1>
				</div>
				<div class="col-xl-3 col-lg-5 col-md-5 col-12 col-sm-12">
					<div class="sub_title_section">
						<ul class="sub_title">
							<li> <a href="#"> Home </a>&nbsp; / &nbsp; </li>
							<li>Add User</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</div> 
<div class="employe_dashboard_wrapper jb_cover">
  <div class="container"> 
    <div class="row">
		@include('includes.company_dashboard_menu')       
		<div class="col-lg-9 col-md-12 col-sm-12 col-12">  
			@include('flash::message')			
			{!! Form::model($company, array('method' => 'put', 'route' => array('company.store.employee'),'id' => 'companyaccess', 'class' => 'form', 'files'=>true)) !!}
				<input type="hidden" id="parentcompanyid" name="parentcompanyid" value="<?php echo $company->id ?>">
				<input type="hidden" id="companyid" name="companyid" value="<?php echo $company->id ?>">
				<div class="job_listing_left_fullwidth jb_cover" style="margin-top:0px;float:right">
					<div class="row">
						<div class="col-md-6">
							<div class="form-group {!! APFrmErrHelp::hasError($errors, 'first_name') !!}"> 
								<label class="col-form-label mandatory" for="first_name">Name</label>
								<input class="form-control" required="" type="text" name="name" id="name" placeholder="Name" onchange="hideError('error_name');">
								<span id="error_name" class="error_code"></span>
							</div>
						</div>
						<div class="form-group col-md-6 {{ $errors->has('Email') ? ' has-error' : '' }}">
							<label class="col-form-label mandatory" for="Email">Email Address</label>
							<input class="form-control" required="" type="email" id="email" name="email" placeholder="Email id" onchange="hideError('error_email');">
							<span id="error_email" class="error_code"></span>
						</div>
						<div class="form-group col-md-6 {{ $errors->has('Password') ? ' has-error' : '' }}">
							<label class="col-form-label mandatory" for="Password">Password</label>
							<input class="form-control" required="" type="text" name="password" id="password" placeholder="Password" onchange="hideError('error_password');">
							<span id="error_password" class="error_code"></span>
						</div>
						<div class="col-md-6"> 
							<div class="form-group">
								<label class="col-form-label mandatory" for="email">Phone Number</label>
								<input class="form-control" required="" type="number" name="phone" id="phone1" placeholder="Phone Number" onchange="hideError('error_phone');">
								<span id="error_phone" class="error_code"></span>
							</div>
						</div>  
						<div class="col-md-6"> 
							<div class="form-group">
								<label class="col-form-label mandatory" for="email">Desigination</label>
								<input class="form-control" required="" type="text" name="desigination" id="desigination" placeholder="Desigination" onchange="hideError('error_desigination');">
								<span id="error_desigination" class="error_code"></span>
							</div>
						</div> 			 
					</div>
				</div>
				<div class="browse_img_banner jb_cover">
					<div class="col-md-6"> 
						<div class="form-group">
							<label class="col-form-label mandatory" for="email">Select Access</label>
							<ul>
								<li><label><input type="checkbox" id="checkAll" name="accessname" value="All">&nbsp;All</label></li>
								<?php foreach($companydashboardmenulist as $key=>$value){ ?>
								<li><label><input class="checkboxes" type="checkbox" name="access[]" value="<?php echo $key; ?>"  onchange="hideError('error_menu_access');">&nbsp;<?php echo $value; ?></label></li>
								<?php } ?>
							</ul>
							<span id="error_menu_access" class="error_code"></span>
						</div>  
					</div>
					<div class="row">
						<div class="jb_cover">				
							<div class="header_btn search_btn jb_cover">
								<a href="javascript:void(0);" onClick="submitPermissionAssess('form');">{{__('Submit')}}</a>
							</div>
						</div>	
					</div>
				</div>					
			{!! Form::close() !!}
		</div>
    </div>
  </div>
</div>
@include('includes.footer')
@endsection
@push('styles')
<style type="text/css">
.userccount p{ text-align:left !important;}
</style>
@endpush
@push('scripts')
<script src="{{asset('/')}}js/mobiscroll.jquery.min.js"></script> 
<script>
$("#checkAll").click(function(){
	$('input:checkbox').prop('checked', this.checked);    
});
$('.checkboxes').change(function(){  
	if($('.checkboxes:checked').length == $('.checkboxes').length){
		$("#checkAll").prop('checked',true);
	}else{
		$("#checkAll").prop('checked',false);
	}
});
function hideError(id)
{
	$("#"+id).html('');
}
function hideError1(id)
{
	$("#"+id).html('');
	$("#error_jobtitle").html('');
}
function submitPermissionAssess(){
	var name = $("#name").val();
	var email = $("#email").val();
	var password = $("#password").val();
	var phone = $("#phone1").val();
	var desigination = $("#desigination").val();
	var flag = true;
	if(name==""){
		$("#error_name").html("Name is required.");
		flag = false;
	}else{
		$("#error_name").html("");
	}
	if(email==""){
		$("#error_email").html("Email is required.");
		flag = false;
	}else{
		$("#error_email").html("");
	}
	if(password==""){
		$("#error_password").html("Password is required.");
		flag = false;
	}else{
		$("#error_password").html("");
	}
	if(phone==""){
		$("#error_phone").html("Phone number is required.");
		flag = false;
	}else{
		$("#error_phone").html("");
	}
	if(desigination==""){
		$("#error_desigination").html("Desigination is required.");
		flag = false;
	}else{
		$("#error_desigination").html("");
	}
	var val = [];
	$('.checkboxes:checked').each(function(i){
	  val[i] = $(this).val();
	});
	if(val.length==0){
		$("#error_menu_access").html("At least one value must be checked");
		flag = false;
	}else{
		$("#error_menu_access").html("");
	}
	if(flag==false){
		return false;
	}else{
		$.ajax({
			type: 'GET',
			url: "{{url("varifyemail")}}",
			data: {"email_id": email,"_token": "{{ csrf_token() }}"},	
			success: function (data){
				response = JSON.parse(data);
				var res = response;
				if(res){
					$("#companyaccess").submit();
					/*$.ajax({
						type: 'GET',
						url: "{{url("varifyemail")}}",
						data: {"phonenumber": phone,"_token": "{{ csrf_token() }}"},	
						success: function (data){
							response = JSON.parse(data);
							var res = response;
							if(res){
								$("#companyaccess").submit();
							}else{
								$("#companyaccess").submit();
								//$("#error_phone").html("Entered phone number is in records.");
							}
						},
					});		*/			
				}else{
					$("#error_email").html("Entered email is in records.");
				}
			},
		});
	}
}

</script>

@endpush