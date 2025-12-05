import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@/components/common/Button';
import Checkbox from '@/components/common/Checkbox';
import TextField from '@/components/common/TextField';
import { TERMS_TEXT } from '@/constants/legal';
import VerticalWhiteLogo from '@/assets/vertical-white-logo.svg';

const SignupPage = () => {
  return (
    <Signup>
      <section className='hero-section'>
        <img src={VerticalWhiteLogo} alt='DevTime Logo' />
        <p>개발자를 위한 타이머</p>
      </section>
      <section className='form-section'>
        <h1 className='title'>회원가입</h1>
        <form>
          <TextField
            id='email'
            type='email'
            label='아이디'
            placeholder='이메일 주소 형식으로 입력해 주세요.'
            helperText='이메일 형식으로 작성해 주세요.'
            button={
              <Button disabled priority='tertiary'>
                중복 확인
              </Button>
            }
          />
          <TextField
            id='nickname'
            type='text'
            label='닉네임'
            placeholder='닉네임을 입력해 주세요.'
            helperText='닉네임을 입력해 주세요.'
            button={
              <Button disabled priority='tertiary'>
                중복 확인
              </Button>
            }
          />
          <TextField
            id='password'
            type='password'
            label='비밀번호'
            placeholder='비밀번호를 입력해 주세요.'
            helperText='비밀번호는 8자 이상, 영문과 숫자 조합이어야 합니다.'
          />
          <TextField
            id='passwordConfirm'
            type='password'
            label='비밀번호 확인'
            placeholder='비밀번호를 다시 입력해 주세요.'
            helperText='비밀번호가 일치하지 않습니다.'
          />

          <fieldset className='terms'>
            <div className='terms-header'>
              <span>이용약관</span>
              <Checkbox id='terms' name='terms' label='동의함' />
            </div>

            <div className='terms-content'>
              <span>{TERMS_TEXT}</span>
            </div>
          </fieldset>
          <Button size='large' type='submit'>
            회원가입
          </Button>
        </form>

        <div className='info'>
          <span>회원이신가요?</span>
          <Link to='/login'>로그인 바로가기</Link>
        </div>
      </section>
    </Signup>
  );
};

const Signup = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.hero-section {
      background-color: ${({ theme: { color } }) => color.primary.default};

      img {
        width: 264px;
        height: 200px;
        margin-bottom: 36px;
      }

      p {
        ${({ theme: { typography } }) => typography.title};
        font-weight: ${({ theme: { fontweight } }) => fontweight.semibold};
        color: #fff;
      }
    }

    &.form-section {
      max-width: 420px;
      margin: 0 auto;

      .title {
        ${({ theme: { typography } }) => typography.heading};
        font-weight: ${({ theme: { fontweight } }) => fontweight.bold};
        color: ${({ theme: { color } }) => color.primary.default};
        margin-bottom: 36px;
      }

      .terms {
        margin-bottom: 36px;

        .terms-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        .terms-content {
          padding: 12px 16px;
          background-color: ${({ theme: { color } }) => color.gray[50]};
          border-radius: 5px;

          span {
            ${({ theme: { typography } }) => typography.caption};
            overflow: scroll;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            margin: 0;
            white-space: pre-wrap;
            word-break: break-word;
            line-height: 1.6;
            scrollbar-width: none;
          }
        }
      }

      .info {
        ${({ theme: { typography } }) => typography.body};
        color: ${({ theme: { color } }) => color.primary.default};
        font-weight: ${({ theme: { fontweight } }) => fontweight.regular};
        margin-top: 24px;
        display: flex;
        gap: 12px;

        a {
          color: ${({ theme: { color } }) => color.primary.default};
          font-weight: ${({ theme: { fontweight } }) => fontweight.bold};
        }
      }
    }
  }
`;

export default SignupPage;
