package academy.user.staff.administration

import academy.user.AcademyUser
import academy.user.security.AcademyUserType

class AcademyAdmin extends AcademyUser {

    {
        this.userType = AcademyUserType.ADMIN
    }

}
