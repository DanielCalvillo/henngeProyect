import React from 'react'
import EmailLineMobile from './EmailLineMobile';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => ({

}));

function EmailListMobile() {

    const classes = useStyles();
    let mails = [
            {
                id: 1234,
                from: 'aaa@example.com', 
                to: "zzz.zzz@example.com", 
                subject: "[HR-888] Notice of official announcement",
                date: "0:20",
                extraNum: 0,
                clipped: true
            },
            {
                id: 1235,
                from: 'bbb.bbb@example.com', 
                to: "zzz.zzz@example.com", 
                subject: "[HR-888] Notice of official announcement",
                date: "0:10",
                extraNum: 0,
                clipped: true
            },
            {
                id: 1236,
                from: 'ccc@example.com', 
                to: "zzz.zzz@example.com", 
                subject: "[HR-888] Notice of official announcement",
                date: "0:00",
                extraNum: 0,
                clipped: true
            },
            {
                id: 1237,
                from: 'ddd.ddd@example.com', 
                to: "zzz.zzz@example.com", 
                subject: "[HR-888] Notice of official announcement",
                date: "Jan 01",
                extraNum: 0,
                clipped: true
            },
            {
                id: 1238,
                from: 'hhh@example.com', 
                to: "zzz.zzz@example.com", 
                subject: "[HR-888] Notice of official announcement",
                date: "Jan 01",
                extraNum: 0,
                clipped: true
            },
            {
                id: 1239,
                from: 'aaa@example.com', 
                to: "zzz.zzz@example.com", 
                subject: "[HR-888] Notice of official announcement",
                date: "Jan 01",
                extraNum: 0,
                clipped: true
            },
            {
                id: 1244,
                from: 'aaa@example.com', 
                to: "zzz.zzz@example.com", 
                subject: "[HR-888] Notice of official announcement",
                date: "Jan 01",
                extraNum: 0,
                clipped: true
            },
            {
                id: 1334,
                from: 'aaa@example.com', 
                to: "zzz.zzz@example.com", 
                subject: "[HR-888] Notice of official announcement",
                date: "Jan 01",
                extraNum: 0,
                clipped: true
            },
            {
                id: 1254,
                from: 'aaa@example.com', 
                to: "zzz.zzz@example.com", 
                subject: "[HR-888] Notice of official announcement",
                date: "2019/12/31",
                extraNum: 4,
                clipped: true
            },
            {
                id: 3234,
                from: 'aaa@example.com', 
                to: "zzz.zzz@example.com", 
                subject: "[HR-888] Notice of official announcement",
                date: "2019/12/31",
                extraNum: 3,
                clipped: true
            }
    ]

    return(
        <div className={classes.emailListContainer}>
                {mails.map( m => (
                    <>
                        <EmailLineMobile 
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
    )
}
export default EmailListMobile