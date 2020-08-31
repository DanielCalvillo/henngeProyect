import React from 'react'
import EmailLine from './EmailLine';

function EmailList(props) {

        return(
            <div>
                <div>
                    {props.mails.map( m => (
                        <>
                            <EmailLine 
                                key={m.id} 
                                from={m.from} 
                                to={m.to} 
                                subject={m.subject} 
                                date={m.date}
                                extraNum={m.extraNum}
                                clipped={m.clipped}
                            />
                            <hr />
                        </>
                    ))}
                </div>
            </div>
        )
}
export default EmailList