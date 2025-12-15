'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogAction } from '@/components/ui/alert-dialog'
import Image from 'next/image'

export default function LoginPage() {
  const [otp, setOtp] = useState('')
  const [showError, setShowError] = useState(false)
  const router = useRouter()

  const handleComplete = (value) => {
    if (value === process.env.NEXT_PUBLIC_OTP) {
      router.push('/dashboard')
    } else {
      setShowError(true)
      setOtp('')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg dark:bg-gray-950">
        <div className="flex flex-col items-center space-y-4">
          <Image src="/LycraLogo.png" alt="Logo" width={200} height={80} priority />
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-sm text-muted-foreground">Enter Your One Time Password (OTP) To Continue</p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <InputOTP maxLength={6} value={otp} onChange={setOtp} onComplete={handleComplete}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </div>

      <AlertDialog open={showError} onOpenChange={setShowError}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Invalid OTP</AlertDialogTitle>
            <AlertDialogDescription>
              The OTP you entered is incorrect. Please try again.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowError(false)}>Try Again</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
