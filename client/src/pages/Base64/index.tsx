import React, { useState } from 'react';
import CommonStyles from 'components/CommonStyles';
import { useTheme } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import TextField from 'components/CustomFields/TextField';
import { showError, showSuccess } from 'helpers/toast';
import httpService from 'services/httpService';
import { copyToClipboard } from 'helpers';
import Tabs from 'components/Tabs';
import * as Yup from 'yup';

const ModeBase64 = {
  ENCODE: 0,
  DECODE: 1,
};

const Base64Trigger = ({ tab }: { tab: { tab: number } }) => {
  const theme = useTheme();
  const [result, setResult] = useState('');

  const isEncode = tab.tab === ModeBase64.ENCODE;

  return (
    <Formik
      initialValues={{ input: '' }}
      validationSchema={Yup.object().shape({
        input: Yup.string().required('Input is required field!'),
      })}
      onSubmit={async ({ input }, { setSubmitting }) => {
        try {
          setSubmitting(true);
          const request = isEncode
            ? httpService.post('/api/base64/encode', { input })
            : httpService.post('/api/base64/decode', { input });

          const res = await request;

          setResult(res?.data || '');
        } catch (error) {
          showError(error);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => {
        return (
          <Form style={{ width: '100%' }}>
            <CommonStyles.Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Field
                component={TextField}
                name='input'
                multiline
                rows={4}
                fullWidth
                variant='filled'
                label='Type or Paste here...'
              />

              <CommonStyles.Button type='submit' loading={isSubmitting}>
                {isEncode ? 'Encode' : 'Decode'}
              </CommonStyles.Button>

              {result && (
                <CommonStyles.Box
                  sx={{
                    borderRadius: 2,
                    p: 2,
                    border: `1px solid ${theme?.colors?.borderBaseAlpha}`,
                  }}
                >
                  <CommonStyles.Typography component='span' sx={{ fontSize: 18 }}>
                    <b>Result:</b>
                  </CommonStyles.Typography>
                  <CommonStyles.Typography component='p' sx={{ wordBreak: 'break-word' }}>
                    {result}
                  </CommonStyles.Typography>
                  <CommonStyles.Button
                    sx={{ mt: 1 }}
                    onClick={() => {
                      copyToClipboard(result);
                      showSuccess('Copied!');
                    }}
                  >
                    Copy
                  </CommonStyles.Button>
                </CommonStyles.Box>
              )}
            </CommonStyles.Box>
          </Form>
        );
      }}
    </Formik>
  );
};

const Base64 = () => {
  //! State

  const [tab, setTab] = useState(ModeBase64.ENCODE);

  //! Function

  //! Render
  return (
    <CommonStyles.Box className='component:Base64'>
      <CommonStyles.Typography variant='bodyMBold'>Base64</CommonStyles.Typography>
      <Tabs
        tabs={[
          { label: 'Encode', component: Base64Trigger, tab: ModeBase64.ENCODE },
          { label: 'Decode', component: Base64Trigger, tab: ModeBase64.DECODE },
        ]}
        defaultTab={tab}
        onChangeTab={(tab) => setTab(tab)}
      />
    </CommonStyles.Box>
  );
};

export default React.memo(Base64);
