import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import './UserForm.scss';

import userService from '../../../services/userService';
import Input from '../../../components/Input/Input';
import useInput from '../../../hooks/useInput';
import Select from '../../../components/Select/Select';
import Switch from '../../../components/Switch/Switch';
import { AdminUsersApiApiAdminUsersNewAdminPostRequest, AdminUsersApiApiAdminUsersPostRequest, AdminUsersApiApiAdminUsersPutRequest, UserResponseDto, UserRoleEnum, UserStatusEnum } from '../../../api';
import { toast } from 'react-toastify';
import Button from '../../../components/Button/Button';
import { useSelector } from 'react-redux';
import { AppState } from '../../../redux/rootReducer';
import PhoneNumberInput from '../../../components/Input/PhoneNumber/PhoneNumberInput';
import Modal from '../../../components/Modal/Modal';

type Props = {}

const UserForm = (props: Props) => {

  const {id} = useParams();
  const [hasId, setHasId] = useState<boolean>(false);
  const [userData, setUserData] = useState<Object|any>(null);
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modalVisible, setIsModalVisible] = useState<boolean>(false);

  const navigate = useNavigate();
  const auth = useSelector((state: AppState) => state.auth);

  const usernameInput = useInput('', String)
  const nameInput = useInput('', String);
  const passwordInput = useInput('', String);
  const repeatPasswordInput = useInput('', String);
  const roleInput = useInput(null, UserRoleEnum);
  const emailInput = useInput('', String);
  const statusInput = useInput(0, UserStatusEnum);
  const senderNameInput = useInput('', String);
  const phoneNumberInput = useInput('', String);
  const [phoneNumberRegion, setPhoneNumberRegion] = useState<string>('');

  useEffect(() => {
    const userId = Number(id);
    const hasId = !Number.isNaN(userId);
    setHasId(hasId);
    if(hasId) userService.getUserById(userId).then((res) => loadUserData(res)).catch(() => { return navigate('/users'); })
  }, [])

  useEffect(() => {
    if(hasId && userData){
      observeCanUpdateUser()
    } else {
      observeCanAddUser()
    }

    // console.clear();
    // console.table({usernameInput, nameInput, passwordInput, repeatPasswordInput, roleInput, emailInput, statusInput, senderNameInput, phoneNumberInput, phoneNumberRegion});

  }, [
    usernameInput, 
    nameInput, 
    passwordInput, 
    repeatPasswordInput, 
    roleInput, 
    emailInput, 
    statusInput, 
    senderNameInput, 
    phoneNumberInput, 
    phoneNumberRegion,
    senderNameInput
  ])

  const loadUserData = (user: UserResponseDto)  => {
    setUserData(user);
    usernameInput.loadValue(user.username);
    nameInput.loadValue(user.name);
    phoneNumberInput.loadValue(user.phoneNumber);
    senderNameInput.loadValue(user.senderName);
    roleInput.loadValue(user.role);
    emailInput.loadValue(user.email);
    statusInput.loadValue(user.status);
  }



  const observeCanAddUser = () => {
    const username = usernameInput.value.toString()
    const name = nameInput.value.toString()
    const email = emailInput.value.toString()
    const phoneNumber = phoneNumberInput.value?.toString();
    const senderName = senderNameInput.value.toString();
    let dataValid = false;

    if(username.trim().length > 0 && name.trim().length && roleInput.value && email.trim().length > 0 && (phoneNumber && phoneNumberRegion) && senderName.trim().length){
      dataValid = true
    }

    if(dataValid && isPasswordValid()){
      setCanSubmit(true)
    } else {
      setCanSubmit(false)
    }
  }

  const observeCanUpdateUser = () => {
    const username = usernameInput.value.toString()
    const name = nameInput.value.toString()
    const phoneNumber = phoneNumberInput.value.toString();
    const sender_name = senderNameInput.value.toString();
    const email = emailInput.value.toString()
    const role = roleInput.value;
    const userStatus = statusInput.value;
    let dataValid = false

    if(((username.trim() !== userData.username.trim()) && (username.trim().length > 0)) || 
      ((name.trim() !== userData.name.trim()) && (name.trim().length > 0)) ||
      ((phoneNumber.trim() !== userData.phoneNumber.trim()) && (phoneNumber.trim().length > 0)) ||
      ((sender_name.trim() !== userData.senderName.trim()) && (sender_name.trim().length > 0)) ||
      (role && (role !== userData.role)) ||
      (userStatus && (userStatus !== userData.status)) || 
      ((email !== userData.email) && (email.trim().length > 0))){
      dataValid = true
    }
    
    if(dataValid || isPasswordValid()){
      setCanSubmit(true)
    } else {
      setCanSubmit(false)
    }
  }

  const isPasswordValid = () => {
    let password = passwordInput.value;
    let repeatPassword = repeatPasswordInput.value;
    return (password.trim().length > 0 && repeatPassword.trim().length > 0 && (password === repeatPassword))
  }

  const isNumberValid = () => {
    
    if(!phoneNumberInput.value && !phoneNumberRegion){
      return false;
    }

    return true;
  }


  const handleSave = () => {

    if(!canSubmit) return;
    if(!isNumberValid()) return toast.error('Please input valid phone number');

    setIsLoading(true);

    if(hasId){
      handleUpdateUser();
    } else {
      handleAddUser();
    }
   
  }

  const handleAddUser = () => {
    let createUserData: AdminUsersApiApiAdminUsersNewAdminPostRequest;

    createUserData = {
      name: nameInput.value,
      username: usernameInput.value,
      phoneNumber: phoneNumberInput.value,
      phoneRegion: phoneNumberRegion,
      senderName: senderNameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      passwordConfirm: passwordInput.value,
      role: roleInput.value,
      status: statusInput.value
    }

    userService.addAdmin(createUserData).then((res) => {
      setIsLoading(false);
      navigate('/users');
      toast.success('Uspješno dodan korisnik!');
    }).catch((res) => {
      setIsLoading(false);
    }).finally(() => {})
  }

  const handleUpdateUser = () => {

    let userUpdateData: AdminUsersApiApiAdminUsersPutRequest;

    if(!isPasswordValid()){
      userUpdateData = {
        id: userData.id,
        name: nameInput.value,
        username: usernameInput.value,
        phoneNumber: phoneNumberInput.value,
        phoneRegion: phoneNumberRegion,
        senderName: senderNameInput.value,
        email: emailInput.value,
        role: roleInput.value,
        status: statusInput.value
      }
    } else {
      userUpdateData = {
        id: userData.id,
        name: nameInput.value,
        username: usernameInput.value,
        phoneNumber: phoneNumberInput.value,
        phoneRegion: phoneNumberRegion,
        senderName: senderNameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        passwordConfirm: passwordInput.value,
        role: roleInput.value,
        status: statusInput.value
      }
    }

    userService.update(userUpdateData).then((res) => {
      setIsLoading(false);
      navigate('/users');
      toast.success('Successfully saved changes for the user!');
    }).catch((res) => {
      setIsLoading(false);
    }).finally(() => {})
  }

  const handleDeleteUser = () => {
    setIsLoading(true);
    setIsModalVisible(false);

    userService.deleteUser(userData.id).then((res) => {
      setIsLoading(false);
      navigate('/users');
      toast.success('User deleted successfully.');
    }).catch((res) => {
      setIsLoading(false);
    }).finally(() => {})
  }
  
  const getButtonClasses = () => {
    let buttonClasses = '';
    if(!canSubmit) buttonClasses = `${buttonClasses} disabled`
    if(isLoading) buttonClasses = `${buttonClasses} loading`
    return buttonClasses;
  }

  const isSuperAdministrator = () => {
    const role = auth.user.role;
    if(role === 1) return true;
    return false;
  }


  return (
    <div className='form-container'>

      <div className='form-header'>
        {hasId ? (
          <>
            <h2>Edit user <strong>{userData && userData.username}</strong></h2>
            {(userData && isSuperAdministrator()) && <Button buttonClass='danger' onClick={() => setIsModalVisible(true)}><p>Delete</p></Button>}
          </>
        ) : (
          <h2>Add user</h2>
        )}
      </div>

      <div className='content'>

          <div className='form-row'>
            <Input type="text" id="username" label="username" {...usernameInput} />
            <Input type="text" id="name" label="name" {...nameInput} />
          </div>

          <div className='form-row'>
            <PhoneNumberInput id="phonenumber" label="Phone number" inputBind={phoneNumberInput} onChangeRegion={setPhoneNumberRegion} />
            <Input type="text" id="senderName" label="Sender name" {...senderNameInput} />
          </div>

          <div className='form-row'>
            <Select id="role" label="Role" inputBind={roleInput} />
          </div>

          <div className='form-row full-width'>
            <div className='form-column full-width'>
              <div className='form-row'>
                <Input type="password" id="password" label={`${hasId ? 'New' : ''} password`} {...passwordInput} />
                <Input type="password" id="password-repeat" label={`${hasId ? 'New' : ''} password repeat`} {...repeatPasswordInput} />
              </div>
              <small className='password-type-note'>NOTE: The password must have at least 8 characters and must consist of at least one number, one special character and one capital letter.</small>
            </div>
          </div>

          <div className='form-row'>
            <Input type="email" id="email" label="email" {...emailInput} />
            <Switch id="status" label="status" enumBind={UserStatusEnum} inputBind={statusInput} />
          </div>

      </div>
      
      <div className='form-actions'>
        <Button buttonClass='secondary' onClick={() => navigate('/users')}><p>Cancel</p></Button>
        <Button buttonClass={getButtonClasses()} onClick={() => handleSave()}>
          {!isLoading && <p>Save</p>}
        </Button>
      </div>

      {/* alert before deleting user */}
      <Modal 
        isVisible={modalVisible} 
        onConfirmModal={handleDeleteUser} 
        onCloseModal={setIsModalVisible} 
        modalTitle='Are you sure? This will permanently delete selected user!'
      />

    </div>
  )
}

export default UserForm