package com.spring.controller;

import com.spring.domain.MyEvent;
import com.spring.service.EventService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

@Controller
@RequestMapping("/event")
public class EventController {

    @Resource
    private EventService eventService;

    //创建事件
    @RequestMapping("/create")
    @ResponseBody
    public int createMyEvent(MyEvent myEvent){
        System.out.println("日期："+myEvent.getDate()+" 事件:" + myEvent.getEvent());
        return eventService.createOneEvent(myEvent);
    }

    //删除指定事件
    @RequestMapping("/delete")
    @ResponseBody
    public int delMyEvent(String openid, String date){
        System.out.println("删除指定事件的日期:" + date);
        return eventService.delOneEvent(openid, date);
    }

    //更新事件
    @RequestMapping("/update")
    @ResponseBody
    public int updateMyEvent(MyEvent myEvent){
        System.out.println("日期："+ myEvent.getDate() + " 事件:" + myEvent.getEvent());
        return eventService.updateOneEvent(myEvent);
    }

    //查询全部事件
    @RequestMapping("/select")
    @ResponseBody
    public List<MyEvent> getMyEvents(String date, String openid){
        return eventService.getAllEvents(date, openid);
    }
}
