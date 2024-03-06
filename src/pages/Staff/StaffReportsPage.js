import React from 'react'
import StaffMenu from '../../components/Staff/StaffMenu';
import StaffHeader from '../../components/Staff/StaffHeader';
import StaffReport from '../../components/Staff/StaffReport';
import '../../css/Staff.css'

const StaffReportsPage = () => {
    return (
        <div className='staff'>
            <StaffHeader />
            <div class="container text-center">
                <div class="row">
                    <div class="col-3">
                        <StaffMenu activeItem={5} />
                    </div>
                    <div class="col-9">
                        <StaffReport />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StaffReportsPage