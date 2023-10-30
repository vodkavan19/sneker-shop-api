import { map } from 'rxjs/operators';
import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';

@Injectable()
export class ResponseTransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>) {
    context.switchToHttp().getResponse().status(HttpStatus.OK);
    return next.handle().pipe(
      map((data) => {
        if (!data) return {};
        return data;
      }),
    );
  }
}
