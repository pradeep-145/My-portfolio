import { toast } from "react-hot-toast";
export const showToast=(type)=>{
    switch(type){
        case 'success':
            toast.success('Email sent!');
            break;
            case 'error':
                toast.error('Failed to send Email!');
    }

}