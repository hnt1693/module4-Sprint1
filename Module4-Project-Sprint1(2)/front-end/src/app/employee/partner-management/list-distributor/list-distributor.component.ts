import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DeleteListDistributor, Distributor, TypeOfDistributor} from '../../../models/distributor';
import {DistributorService} from '../../../services/distributor.service';
import {Router} from '@angular/router';
import * as $ from 'jquery';
import {Observable} from 'rxjs';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from '@angular/fire/storage';
import {finalize, map} from 'rxjs/operators';

@Component({
  selector: 'app-list-distributor',
  templateUrl: './list-distributor.component.html',
  styleUrls: ['./list-distributor.component.scss']
})
export class ListDistributorComponent implements OnInit {
<<<<<<< HEAD
  distributorList: Distributor[];
  size = 5;
  pageClick = 0;
  pages = [];
  search = '';
  isSearch = false;

  totalPages = 1;
  listError: any = '';
  // Thach
  img: any;
  myForm: FormGroup;
  src = 'https://worklink.vn/wp-content/uploads/2018/07/no-logo.png';
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  getUrlUploadImgPromise: any;
  typeOfDistributorPromise: any;
  isChangedImg = false;
  myDistributor: Distributor;
  functionTitle: string;
  functionButton: string;
  functionMode: string;
  percentUpload: Observable<number>;
  isSubmiting: boolean = false;
  deleteList: DeleteListDistributor[] = [];
  imgFile: any;

=======
>>>>>>> origin
  constructor(private fb: FormBuilder,
              private distributorService: DistributorService,
              private router: Router, private afStorage: AngularFireStorage) {
    this.myForm = fb.group({
      id: [''],
      name: ['', [Validators.required]],
      numberPhone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.pattern('^[a-z][a-z0-9_\\.]{5,}@[a-z0-9]{1,}(\\.[a-z0-9]{2,4}){1,2}$')]],
      address: ['', [Validators.required]],
      fax: [''],
      website: [''],
      img: [''],
      typeOfDistributor: [''],
      deleted: ['false']
    });
  }

<<<<<<< HEAD
  onNext(): void {
=======
  distributorForm: FormGroup;
  distributorList: Distributor[];
  size = 5;
  pageClick = 0;
  pages = [];

  search = '';
  isSearch = false;

  totalPages = 1;
  listError: any = '';
  // Thach
  img: any;
  myForm: FormGroup;

  src = 'https://worklink.vn/wp-content/uploads/2018/07/no-logo.png';
  myDistributor: Distributor;

  // tslint:disable-next-line:typedef
  onNext() {
>>>>>>> origin
    if (this.pageClick < this.totalPages - 1) {
      this.pageClick++;
      this.onChange(this.pageClick);
      $('#all').prop('checked', false);
    }
  }

<<<<<<< HEAD
  onPrevious(): void {
=======
  // tslint:disable-next-line:typedef
  onPrevious() {
>>>>>>> origin
    if (this.pageClick > 0) {
      this.pageClick--;
      this.onChange(this.pageClick);
      $('#all').prop('checked', false);
    }
  }

<<<<<<< HEAD
  onFirst(): void {
=======
  // tslint:disable-next-line:typedef
  onFirst() {
>>>>>>> origin
    this.pageClick = 0;
    this.onChange(this.pageClick);
    $('#all').prop('checked', false);
  }

<<<<<<< HEAD
  onLast(): void {
=======
  // tslint:disable-next-line:typedef
  onLast() {
>>>>>>> origin
    this.pageClick = this.totalPages - 1;
    $('#all').prop('checked', false);
    this.onChange(this.pageClick);
  }

<<<<<<< HEAD
  onChange(page): void {
    this.distributorService.getAllDistributor(page, this.size, this.search).subscribe(
      next => {
        console.log(next);
        if (next !== null) {
          this.pageClick = page;
          this.distributorList = next.content;
          this.totalPages = next.totalPages;
          this.pages = Array.apply(null, {length: this.totalPages}).map(Number.call, Number);
          this.fillListToSize();
          this.router.navigate(['employee/partner-management/list-distributor']);
        } else {
          this.distributorList = [];
          this.fillListToSize();
        }

      },
      error => {
        this.distributorList = [];
        this.fillListToSize();
      }
    );
    this.deleteList = [];
    $('#all').prop('checked', false);
  }

  getAllDistributor(): void {
    this.onChange(this.pageClick);
=======
  // tslint:disable-next-line:typedef
  onChange(page) {
    this.distributorService.getAllDistributor(page, this.size, this.search).subscribe(
      next => {
        console.log(next);
        this.pageClick = page;
        this.distributorList = next.content;
        this.totalPages = next.totalPages;
        this.pages = Array.apply(null, {length: this.totalPages}).map(Number.call, Number);
      },
      error => console.log(error)
    );
  }

  getAllDistributor(): void {
    this.onChange(0);
>>>>>>> origin
  }

  ngOnInit(): void {
    this.getAllDistributor();
    // this.distributorService.findAll().subscribe(
    //   next => this.distributorList = next,
    //   error => {
    //     this.distributorList = [];
    //     console.log(error);
    //   }
    // );


<<<<<<< HEAD
=======
    // tslint:disable-next-line:only-arrow-functions no-shadowed-variable typedef
    (function($) {
      // tslint:disable-next-line:only-arrow-functions typedef
      $(document).ready(function() {
        // tslint:disable-next-line:only-arrow-functions typedef
        const readURL = function(input) {
          if (input.files && input.files[0]) {
            const reader = new FileReader();
            // tslint:disable-next-line:only-arrow-functions typedef
            reader.onload = function(e) {
              // @ts-ignore
              $('.profile-pic').attr('src', e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
          }
        };
        // tslint:disable-next-line:typedef
        $('.file-upload').on('change', function() {
          readURL(this);
        });
        // tslint:disable-next-line:only-arrow-functions typedef
        $('.upload-button').on('click', function() {
          $('.file-upload').click();
        });
      });
    })(jQuery);
>>>>>>> origin
    // Thach
    $('.icon-upload-alt').css('opacity', '-1');
    // tslint:disable-next-line:typedef
    $('.button').click(function() {
      const buttonId = $(this).attr('id');
      $('#modal-container').removeAttr('class').addClass(buttonId);
      $('body').addClass('modal-active');
    });
    // tslint:disable-next-line:typedef
    $('#modal-container').click(function() {
      $(this).addClass('out');
      $('body').removeClass('modal-active');
    });
  }

  // tslint:disable-next-line:typedef
<<<<<<< HEAD
  // onSubmit() {
  //   if (this.myForm.valid) {
  //     console.log(this.myForm.value);
  //     this.distributorService.create(this.myForm.value).subscribe(
  //       next => {
  //         console.log(next);
  //         alert('Bạn đã thêm mới thành công');
  //         // @ts-ignore
  //         this.myForm.reset();
  //         this.getAllDistributor();
  //         this.router.navigate(['employee/partner-management/list-distributor']);
  //         $('#deleteFormCreate').click();
  //       }
  //     );
  //
  //   } else {
  //     alert('Invalid');
  //   }
  // }


  onSubmit(): void {
    this.myForm.markAllAsTouched();
    this.checkValidateTypeOfDistributor();
    if (this.isSubmiting === false) {
      if (this.myForm.valid) {
        if (this.functionMode === 'create') {
          if (this.isChangedImg) {
            this.uploadFireBaseAndSubmit();
          } else {
            this.submitForm();
          }
        } else if (this.functionMode === 'edit') {
          this.createAndUpdateForm();
=======
  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.distributorService.create(this.myForm.value).subscribe(
        next => {
          console.log(next);
          alert('Bạn đã thêm mới thành công');
          // @ts-ignore
          this.myForm.reset();
          this.getAllDistributor();
          this.router.navigate(['employee/partner-management/list-distributor']);
          $('#deleteFormCreate').click();
>>>>>>> origin
        }
      } else {
        if (this.isSubmiting === false) {
          this.showNotications('Vui lòng kiểm tra lại các trường');
        } else {
          this.showNotications('Bạn đã hủy đăng ký');
        }
      }
    }
  }

  createAndUpdateForm(): void {
    if (this.isChangedImg) {
      this.uploadFireBaseAndSubmit();
    } else {
      this.submitForm();
    }
  }

<<<<<<< HEAD
  deleteDistrinbutor(id: number): void {
    this.myDistributor.deleted = true;
    this.distributorService.create(this.myDistributor).subscribe(
=======
  // Thach Function
  // tslint:disable-next-line:typedef
  updateDistributor() {
    console.log(this.myForm.value);
    this.distributorService.save(this.myForm.value).subscribe(
>>>>>>> origin
      res => {
        this.showNotications('Xóa nhà phân phối thành công');
        this.resetList();
        $('#closeDeleteForrm').click();
      },
      error => {
        this.showNotications('Xóa nhà phân phối thất bại');
      }
    );
  }

<<<<<<< HEAD
  private submitForm(): void {
    // $('#closeEditForm').click();
    if (this.functionMode === 'create') {
      if (this.typeOfDistributorPromise !== undefined) {
        this.typeOfDistributorPromise.then(value => {
          this.myForm.value.typeOfDistributor = value;
          this.distributorService.create(this.myForm.value).subscribe(
            res => {
              this.showNotications('Thêm mới thành công');
              this.resetList();
              this.isSubmiting = true;
              $('#closeForm').click();
            },
            error => {
              this.showNotications('Thêm mới thất bại');
            }
          );
        });
      }
    } else if (this.functionMode === 'edit') {
      this.distributorService.create(this.myForm.value).subscribe(
        res => {
          this.showNotications('Chỉnh sửa thành công');
          this.resetList();
          this.isSubmiting = true;
          $('#closeForm').click();
        },
        error => {
          this.showNotications('Chỉnh sửa thất bại');
        }
      );
    }

  }

  loadImgAvatar(target: any): void {
    if (target.files && target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        $('#avatar').attr('src', e.target.result);
      };
      reader.readAsDataURL(target.files[0]);
      this.imgFile = target.files[0];
      $('#myAvatar').val(null);
      this.isChangedImg = true;
    } else {
      console.log('error');
    }
  }

  private uploadFireBaseAndSubmit(): void {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(this.imgFile);
    this.percentUpload = this.task.snapshotChanges()
      .pipe(map(s => (s.bytesTransferred / s.totalBytes) * 100));
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.ref.getDownloadURL().subscribe(url => {
          this.getUrlUploadImgPromise = new Promise((resolve, reject) => {
            resolve(url);
            this.myForm.value.img = url;
            this.submitForm();
          });
        });
      }))
      .subscribe();

  }

=======
>>>>>>> origin
// FUNTION PHU
  // tslint:disable-next-line:typedef
  hoverUploadPic(): void {
    $('.icon-upload-alt').css('opacity', '0.8');
  }

  // tslint:disable-next-line:typedef
  leaveUploadPic() {
    $('.icon-upload-alt').css('opacity', '-1');
  }

  // tslint:disable-next-line:typedef
  selectAvatar() {
    $('#myAvatar').click();
  }

<<<<<<< HEAD
  chooseAll(item: HTMLInputElement): void {
=======
  // tslint:disable-next-line:typedef
  readURL(target: any) {
    if (target.files && target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // $('#avatar').attr('src', e.target.result);
      };
      reader.readAsDataURL(target.files[0]);
    } else {
    }
  }

  // tslint:disable-next-line:typedef
  chooseAll(item: HTMLInputElement) {
>>>>>>> origin
    if ($('#box-1').prop('checked')) {
      $('#box-2, #box-3').prop('checked', true);
      this.distributorService.findTypeOfDistributorByName('Tất cả').subscribe(
        res => {
          this.typeOfDistributorPromise = new Promise(resolve => resolve(res));
        },
        error => console.log(error)
      );
    } else {
      $('#box-2, #box-3').prop('checked', false);
      this.myForm.value.typeOfDistributor = null;
    }
    this.checkValidateTypeOfDistributor();
  }

<<<<<<< HEAD
  chooseOne(target: HTMLInputElement): void {
=======
  // tslint:disable-next-line:typedef
  chooseOne(target: HTMLInputElement) {
>>>>>>> origin
    if ($('#box-2').is(':checked') && $('#box-3').is(':checked')) {
      $('#box-1').prop('checked', true);
      this.distributorService.findTypeOfDistributorByName('Tất cả').subscribe(
        res => this.typeOfDistributorPromise = new Promise(resolve => resolve(res)),
        error => console.log(error)
      );
    } else if ($('#box-2').is(':checked')) {
      $('#box-1').prop('checked', false);
      this.distributorService.findTypeOfDistributorByName('Bánh').subscribe(
        res => {
          this.typeOfDistributorPromise = new Promise(resolve => resolve(res));
        },
        error => console.log(error)
      );
    } else {
      $('#box-1').prop('checked', false);
      this.distributorService.findTypeOfDistributorByName('Kẹo').subscribe(
        res => {
          this.typeOfDistributorPromise = new Promise(resolve => resolve(res));
        },
        error => console.log(error)
      );
    }
    this.checkValidateTypeOfDistributor();
  }

<<<<<<< HEAD
  private checkValidateTypeOfDistributor(): void {
    const checkedBox2 = $('#box-2').prop('checked');
    const checkedBox3 = $('#box-3').prop('checked');
    const checkTypeOfDistributor = (checkedBox2 === false && checkedBox3 === false);
    if (checkTypeOfDistributor) {
      this.myForm.get('typeOfDistributor').setErrors({'required': true});
    } else {
      this.myForm.get('typeOfDistributor').setErrors(null);
    }
  }

  openEditForm(id: number): void {
    this.functionMode = 'edit';
    this.switchCreateAndDetailForm();
    this.isSubmiting = false;
    this.myForm.markAllAsTouched();
    this.percentUpload = new Observable<number>();
    this.functionTitle = 'CHỈNH SỬA NHÀ PHÂN PHỐI';
    this.functionButton = 'SỬA';
    this.isChangedImg = false;
=======
  // tslint:disable-next-line:typedef
  openCreateForm() {
    $('#createForm').click();
  }

  // tslint:disable-next-line:typedef
  openEditForm(id: number) {
>>>>>>> origin
    this.distributorService.findById(id).subscribe(
      res => {
        this.myForm.patchValue(res);
        if (this.myForm.value.img !== '') {
          this.src = this.myForm.value.img;
        }
        switch (this.myForm.value.typeOfDistributor.name) {
          case 'Tất cả' : {
            $('#box-2, #box-3,#box-1').prop('checked', true);
            break;
          }
          case 'Bánh': {
            $('#box-2').prop('checked', true);
            $('#box-1,#box-3').prop('checked', false);
            break;
          }
          case 'Kẹo' : {
            $('#box-3').prop('checked', true);
            $('#box-1,#box-2').prop('checked', false);
            break;
          }
        }
      },
      error => console.log(error)
    );
    $('#openForm').click();

  }

<<<<<<< HEAD

  openCreateForm(): void {
    this.functionMode = 'create';
    this.switchCreateAndDetailForm();
    this.isSubmiting = false;
    this.percentUpload = new Observable<number>();
    this.src = 'https://worklink.vn/wp-content/uploads/2018/07/no-logo.png';
    $('#avatar').attr('src', this.src);
    $('#box-2, #box-3,#box-1').prop('checked', false);

    this.myForm.reset();
    this.functionTitle = 'THÊM MỚI NHÀ PHÂN PHỐI';
    this.functionButton = 'THÊM';
    $('#openForm').click();
  }

  showNotications(mess: string): void {
    const temp = document.getElementById('snackbar');
    temp.textContent = '';
    temp.append(mess);
    // Add the "show" class to DIV
    temp.className = 'showSnackbar';
    // After 3 seconds, remove the show class from DIV
    setTimeout(() => {
      temp.className = temp.className.replace('show', '');
    }, 3000);
  }


  openDeleteForm(id: number): void {
=======
  // tslint:disable-next-line:typedef
  openDeleteForm(id: number) {
>>>>>>> origin
    $('#deleteForm').click();
    this.distributorService.findById(id).subscribe(
      res => {
        this.myDistributor = res;
      },
      error => console.log(error)
    );
  }


<<<<<<< HEAD
  searchName(): void {
=======
  // tslint:disable-next-line:typedef
  searchName() {
>>>>>>> origin
    if (this.search === '') {
      this.isSearch = false;
    } else {
      this.isSearch = true;
    }
    this.onChange(0);
  }

<<<<<<< HEAD
  backToSearch(): void {
=======
  // tslint:disable-next-line:typedef
  backToSearch() {
>>>>>>> origin
    this.search = '';
    this.isSearch = false;
    this.ngOnInit();
  }

<<<<<<< HEAD
  openDetailForm(id: number): void {
    this.functionMode = 'detail';
    this.functionTitle = 'XEM THÔNG TIN NHÀ PHÂN PHỐI';
    this.switchCreateAndDetailForm();
=======
  // tslint:disable-next-line:typedef
  openDetailForm(id: number) {
>>>>>>> origin
    this.distributorService.findById(id).subscribe(
      res => {
        this.myForm.patchValue(res);
        if (this.myForm.value.img !== '') {
          this.src = this.myForm.value.img;
        }
        switch (this.myForm.value.typeOfDistributor.name) {
          case 'Tất cả' : {
            $('#box-2, #box-3,#box-1').prop('checked', true);
            break;
          }
          case 'Bánh': {
            $('#box-2').prop('checked', true);
            $('#box-1,#box-3').prop('checked', false);
            break;
          }
          case 'Kẹo' : {
            $('#box-3').prop('checked', true);
            $('#box-1,#box-2').prop('checked', false);
            break;
          }
        }
      },
      error => console.log(error)
    );
    $('#openForm').click();


  }

  switchCreateAndDetailForm(): void {
    const input = $('input');
    const inputFile = $('input[type=file]');
    const inputCheckbox = $('input[type=checkbox]');
    if (this.functionMode === 'create' || this.functionMode === 'edit') {
      input.prop('readonly', false);
      inputCheckbox.prop('disabled', false);
      inputFile.prop('disabled', false);
    } else {
      input.prop('readonly', true);
      inputCheckbox.prop('disabled', true);
      inputFile.prop('disabled', true);
    }
  }

  resetList(): void {
    let count = 0;
    for (let i = 0; i < this.distributorList.length; i++) {
      if (this.distributorList[i].id !== undefined) {
        count++;
      }
    }
    if (this.distributorList.length === 1 || this.deleteList.length === count) {
      if (this.pageClick >= 1) {
        this.onChange(this.pageClick - 1);
      } else {
        this.onChange(this.pageClick);
      }
    } else {
      this.onChange(this.pageClick);
    }
    this.fillListToSize();
    this.router.navigate(['employee/partner-management/list-distributor']);
  }

  fillListToSize(): void {

    if (this.distributorList === null) {
      this.distributorList[0] = new Distributor();
    }
    if (this.distributorList.length < this.size) {
      let i = this.distributorList.length;
      while (i < this.size) {
        this.distributorList[i] = new Distributor();
        i++;
      }
      console.log(this.distributorList);
    }
  }

  getErrorMessage(field: string): string {
    const isFormField = this.myForm.get(field);
    if (isFormField.hasError('required') && isFormField.touched) {
      return 'Trường bắt buộc nhập thông tin!';
    }
    if (isFormField.hasError('pattern') && isFormField.touched) {
      if (field === 'email') {
        return 'Email không hợp lệ. Email theo định dạng :  abc@def.ghk';
      } else if (field === 'numberPhone') {
        return 'SĐT không hợp lệ (yêu cầu 10 số)';
      }
    }

    return '';
  }

  addToListDelete(id: any, name: string): void {
    if (id !== 'all') {
      if (id !== undefined) {
        if ($('#checkbox' + id).prop('checked')) {
          this.deleteList === null ? this.deleteList[0] = new DeleteListDistributor(id, name)
            : this.deleteList[this.deleteList.length] = new DeleteListDistributor(id, name);
        } else {
          this.deleteList.splice(this.deleteList.indexOf(id), 1);

        }
        console.log(this.deleteList);
      }
    } else {

      let item: DeleteListDistributor;
      if ($('#all').prop('checked')) {
        for (let i = 0; i < this.distributorList.length; i++) {
          if (this.distributorList[i].id !== undefined) {
            item = new DeleteListDistributor(this.distributorList[i].id, this.distributorList[i].name);
            this.deleteList[i] = item;
            $('#checkbox' + item.id).prop('checked', true);
          }
          console.log(this.deleteList);
        }
      } else {
        for (let i = 0; i < this.distributorList.length; i++) {
          if (this.distributorList[i].id !== undefined) {
            item = new DeleteListDistributor(this.distributorList[i].id, this.distributorList[i].name);
            $('#checkbox' + item.id).prop('checked', false);
            this.deleteList.splice(this.deleteList.indexOf(item), 1);
          }
          console.log(this.deleteList);
        }
      }


    }
  }


  deleteAll(): void {
    if (this.deleteList.length === this.size) {
      this.distributorService.deleteAllDistributor(this.deleteList).subscribe(
        res => {
          this.showNotications('Xóa tất cả thành công');
          this.resetList();
          $('#all').prop('checked', false);

        },
        error => {
          this.showNotications('Xóa thất bại');
        }
      );
    } else {
      this.distributorService.deleteAllDistributor(this.deleteList).subscribe(
        res => {
          this.showNotications('Xóa tất cả thành công');
          this.resetList();
          $('#all').prop('checked', false);

        },
        error => {
          this.showNotications('Xóa thất bại');
        }
      );
    }
  }

  confirmDeleteAll(): void {
    if (this.deleteList.length !== 0) {
      $('#deleteAllForm').click();
    } else {
      this.showNotications('Bạn chưa chọn nhà phân phối');
    }
  }

  removeFromDeleteList(item: DeleteListDistributor): void {
    this.deleteList.splice(this.deleteList.indexOf(item), 1);
    $('#checkbox' + item.id).prop('checked', false);
    if (this.deleteList.length === 0) {
      $('#closeDeleteAllForm').click();
      $('#all').prop('checked', false);
      for (let i = 0; i < this.distributorList.length; i++) {
        $('#checkbox' + i).prop('checked', false);
      }
    }
  }
}
